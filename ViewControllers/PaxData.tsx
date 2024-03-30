import React, { ReactNode } from "react"
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native"
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox";
import { TextBox } from "../Components/Textboxes";
import { EditButton } from "../Components/Buttons";

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        backgroundColor: "#243712",
        position: "absolute"
    },
    row: {
        width: "100%",
        height:"45%",
        flexDirection:"row",
        flexWrap:"wrap",
        marginBottom:"2%",
        backgroundColor: "#1A1A1A",
        borderBottomWidth: 2,
        borderBottomColor: "#8FD14F",
        paddingTop:"2%",
        paddingBottom:"5%",
        color:"#8FD14F"


    },
    rowBackground:{
        height:120,
        width:"100%",
        marginTop:"3%",
        marginBottom:"3%"
    }
    



});


export interface PaxDataProps {
    handleVisible:(visible:boolean)=>void
}
interface PaxDataState {
    data: Array<Object>,
    header:string,
    message:string,
    messageType:MESSAGETYPE
    height?:String,
    weight?:String,
    age?:Number
    editMode:boolean

}

export class PaxData extends React.Component<PaxDataProps, PaxDataState> {
    constructor(props: PaxDataProps) {
        super(props)

        this.state = {
            data: [{ "HEIGHT": "6'1" }, { "WEIGHT IN LBS": "185" }, { "AGE": "28" }],
            message:"",
            messageType:MESSAGETYPE.INPUT,
            header:"PAX DATA",
            editMode:false,
        };
        this.editMode=this.editMode.bind(this)
        
    }

    editMode(){
        this.setState({editMode:!this.editMode});
    }
    makeRows(): ReactNode {
        return <View key={1} style={styles.rowBackground}>
            <View style={{height:30, width:"100%",  alignItems:"flex-end"}}>
                    <View style={{width:"10%", height:"100%"}}>
                            <EditButton disabled={false} onPress={this.editMode} />
                    </View>
                    
            </View>
            {this.state.data.map((row: {}, idx: number) =>{
                return <View key={idx} style={styles.row}>
                    <Text key={idx+"label"} style={{ width: "45%", textAlign: "center", color: "#8FD14F", fontSize: 16 }}>{Object.keys(row)[0]}</Text>
                     <TextBox key={idx+"input1"} placeHolder="" value={ String(Object.values(row))} style={{ width: "45%", color: "#8FD14F", fontSize: 16, textAlign:"right" }} readonly={this.state.editMode}/> 
                </View>})
            }</View>
    }
    
    render(): React.ReactNode {
        const dialog=<DialogBox header={this.state.header} messageType={this.state.messageType} message={this.state.message} okHandler={()=>{}} closeHandler={()=>{this.props.handleVisible(false)}} subView={[this.makeRows()]}/>
        return dialog
    }

}