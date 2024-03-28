import { View, Text } from "react-native"
import { SelectableButton } from "../Components/Buttons"
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox"
import React from "react"


enum JOIN_ACTION{MAKE,JOIN, NONE}

interface JoinDialogState{
    selectedOption:JOIN_ACTION,
    joinSuccessful:boolean,
    header:string,
    messageType:MESSAGETYPE,
    message:string
}
interface JoinDialogProps{
    handleVisible:(visible:boolean)=>void,
}



export class JoinDialog extends React.Component<JoinDialogProps,JoinDialogState> {
    state = {
        selectedOption: JOIN_ACTION.NONE,
        joinSuccessful:false,
        header:"",
        messageType:MESSAGETYPE.NONE,
        message:""

    };

    constructor(props:JoinDialogProps){
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
                                    messageType:MESSAGETYPE.SUCCESS,
                                    message:"Created CHALK successfully..."}) }} />
                </View>
                <View key={2} style={{ width: "100%", height: "30%", marginBottom: 10 }}>
                    <SelectableButton 
                        value="JOIN CHALK" 
                        selected={this.state.selectedOption === JOIN_ACTION.JOIN ? true : false}
                        disabled={false} 
                        onPress={() => { 
                            this.setState({ 
                                selectedOption: JOIN_ACTION.JOIN, 
                                messageType:MESSAGETYPE.SUCCESS,
                                message:"Joined CHALK successfully..."
                            }) 
                        }
                        } 
                    />
                </View>
            </View>
         let successDialog = 
            <DialogBox key={1} 
                header="JOIN CHALK"
                messageType={this.state.messageType} 
                message={this.state.message}   okHandler={() => {}}  
                closeHandler={() => {
                    if(this.state.selectedOption!==JOIN_ACTION.NONE){
                        this.props.handleVisible(false)
                    }else {
                        this.props.handleVisible(true); 
                        this.setState({joinSuccessful:false});
                    }
                 }
                } 
            />
         
        let dialog = <DialogBox key={1} header="JOIN CHALK" messageType={MESSAGETYPE.INPUT} message="--deviceConnection--" subView={[selectOption]}  okHandler={()=>{
        
           if(this.state.selectedOption===JOIN_ACTION.NONE){
             
            this.setState({ messageType:MESSAGETYPE.WARNING,message:"SELECT FROM THE OPTIONS!!!"})
            this.setState({joinSuccessful:true});
            this.props.handleVisible(true);
           }else{
                this.setState({joinSuccessful:true});
           } 
           
            
        }} closeHandler={() => { this.props.handleVisible(false)}} />
        return this.state.joinSuccessful?successDialog:dialog;
    }
}
