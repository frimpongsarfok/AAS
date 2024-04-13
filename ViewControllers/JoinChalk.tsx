import { View, Text, StyleSheet } from "react-native"
import { SelectableButton } from "../Components/Buttons"
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox"
import React, { ReactNode } from "react"
import { TextBox } from "../Components/Textboxes"


enum JOIN_ACTION { MAKE, JOIN, NONE }

interface JoinDialogState {
    selectedOption: JOIN_ACTION,
    joinSuccessful: boolean,
    header: string,
    messageType: MESSAGETYPE,
    message: string,
    chalkID: string
}
interface JoinDialogProps {
    handleVisible: (visible: boolean) => void,
}


const styles = StyleSheet.create({
    actionDialogTextBox:{
        width:"100%",
        height:"100%",
        fontFamily: "Georgia-Italic",
        fontSize:28, 
        backgroundColor:"#8FD14F", 
        textAlign:"center"
    
    }
})

export class JoinDialog extends React.Component<JoinDialogProps, JoinDialogState> {
    state = {
        selectedOption: JOIN_ACTION.NONE,
        joinSuccessful: false,
        header: "",
        messageType: MESSAGETYPE.NONE,
        message: "",
        chalkID: ""

    };

    constructor(props: JoinDialogProps) {
        super(props);

    }
    componentDidMount(): void {

    }
    render(): React.ReactNode {
        let selectOption =
            <View key={1} style={{ width: "100%", height: "60%", alignSelf: "center" }}>
                <Text style={{ color: "#8FD14F", fontSize: 14, fontFamily: "Georgia-Italic", width: "100%", textAlign: "center", marginBottom: "5%", marginTop: "3%" }}>NOT CONNECTED</Text>
                <View key={1} style={{ width: "100%", height: "30%", marginBottom: 10 }}>
                    <SelectableButton
                        value="MAKE CHALK"
                        selected={this.state.selectedOption === JOIN_ACTION.MAKE ? true : false}
                        disabled={false}
                        onPress={() => {
                            this.setState({
                                selectedOption:
                                    JOIN_ACTION.MAKE,

                            })
                        }} />
                </View>
                <View key={2} style={{ width: "100%", height: "30%", marginBottom: 10 }}>
                    <SelectableButton
                        value="JOIN CHALK"
                        selected={this.state.selectedOption === JOIN_ACTION.JOIN ? true : false}
                        disabled={false}
                        onPress={() => {
                            this.setState({
                                selectedOption: JOIN_ACTION.JOIN,
                            })
                        }
                        }
                    />
                </View>
            </View>
        let messageDialog =
            <DialogBox key={1}
                header="JOIN CHALK"
                messageType={this.state.messageType}
                message={this.state.message} okHandler={() => { }}
                closeHandler={() => {
                    if (this.state.selectedOption === JOIN_ACTION.NONE) {
                        this.setState({ messageType: MESSAGETYPE.NONE, message: "" })
                    }
                }
                }
            />


        const actionDialog = <View key={1} style={{ width: "100%", height: "100%" }}>
            <View key={1} style={{ width: "100%", height: "40%", marginBottom: 10, }}>
                <Text style={{ color: "#8FD14F", fontSize: 18, fontFamily: "Georgia-Italic", width: "100%", textAlign: "center", marginBottom: "5%", marginTop: "3%" }}>ENTER CHALK ID</Text>
            </View>
            <View key={2} style={{ width: "100%", height: "30%", marginBottom: 10, }}>
                <TextBox key={1} placeHolder={
                    this.state.selectedOption===JOIN_ACTION.MAKE?"enter your chalk number here...":
                    this.state.selectedOption===JOIN_ACTION.JOIN?"enter chalk number you want to join...":""} value={this.state.chalkID} readonly={false}  style={styles.actionDialogTextBox} placeholderTextColor="#000" onChangeText={(text)=>{ 
                    this.setState({chalkID:text});
                    return text;
                }}/>
            </View>

        </View>

        let tmpView = undefined
        switch (this.state.selectedOption) {
            case JOIN_ACTION.MAKE:
                tmpView = actionDialog;
                break
            case JOIN_ACTION.JOIN:
                tmpView = actionDialog;
                break;
            case JOIN_ACTION.NONE:
                if (this.state.messageType === MESSAGETYPE.WARNING || this.state.messageType === MESSAGETYPE.ERROR) {
                    return messageDialog;
                }
                tmpView = selectOption;
                break;
            default:
                break;

        }

        let joinChalkDialog = <DialogBox key={1} header="JOIN CHALK" messageType={MESSAGETYPE.INPUT} message="" subView={[tmpView]} okHandler={() => {
            if (this.state.selectedOption === JOIN_ACTION.NONE) {
                this.setState({ messageType: MESSAGETYPE.WARNING, message: "SELECT OPTION TO MAKE OR JOIN EXISTING CHALK!!!" })
                this.props.handleVisible(true);
            } else if (this.state.selectedOption === JOIN_ACTION.MAKE) {
                
                this.setState({joinSuccessful:true} )
                this.props.handleVisible(false);
            }else if(this.state.selectedOption===JOIN_ACTION.JOIN){

                this.setState({joinSuccessful:true} )
                this.props.handleVisible(false);
            }

        }} closeHandler={() => { this.props.handleVisible(false) }} />

        return joinChalkDialog;
    }
}
