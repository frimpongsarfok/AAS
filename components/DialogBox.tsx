import React, { ReactElement } from "react";

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { CheckButton, CloseButton } from "./Buttons";
import { UnderLine } from "./Underline";

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#1A1A1A",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "absolute",


    },
    dialog: {
        backgroundColor: "#1A1A1A",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: "90%",
        opacity: 1,
        marginLeft: "10%",
        marginTop: "5%"
    },
    successMessage: {
        color: "#8FD14F",
    },
    warningMessage: {
        color: "#FEF445",
    },
    errorMessage: {
        color: "#FF0000",
    }
})

export enum MESSAGETYPE {
    SUCCESS,  //
    WARNING, //
    ERROR, // 
    INPUT, // Text Box input
    NONE,
}

type Props = {
    messageType: MESSAGETYPE,
    message: string,
    subView?: []
}
interface AlertDialogProps{
    header:string,
    messageType:MESSAGETYPE,
    message?:string,
    subView?:Array<React.ReactNode>,
    closeHandler:()=>void,
    okHandler:()=>void
}
export class DialogBox extends React.Component<AlertDialogProps> {
    constructor(props:AlertDialogProps){
        super(props)
      
    }
    
    render(): React.ReactNode {

        const textColor = this.props.messageType === MESSAGETYPE.ERROR ? { color: "#8FD14F" } :
        this.props.messageType === MESSAGETYPE.SUCCESS ? { color: "#8FD14F" } :
            this.props.messageType === MESSAGETYPE.WARNING ? { color: "#FF0000" } : { color: "#8FD14F" };
        return <SafeAreaView style={styles.background}>

        <ScrollView style={{ width: "87%", height: 750 }}>
            <View style={[styles.dialog]}>
                <View style={{ height: "20%", width: "100%", marginTop: "3%" }}>
                    <Text style={{ width: "100%", textAlign: "center", color: "#8FD14F", fontWeight: "800", fontSize: 30 }}>{this.props.header}</Text>
                </View>
                <View style={{ height: "90%", width: "100%", paddingBottom:"2%", backgroundColor: "#1A1A1A", }}>
                    {this.props.messageType !== MESSAGETYPE.INPUT && <Text style={[{ textAlign: "center", margin: "2%", marginTop: "10%", justifyContent: "center", fontSize: 24, fontWeight: "bold", fontFamily: "Georgia-italic" }, textColor]}>{this.props.message}</Text>}
                    {this.props.messageType == MESSAGETYPE.INPUT && this.props.subView}
                </View>
                <UnderLine/>
                <View style={[{ height: "10%", backgroundColor: "#1A1A1A", width: "100%", flexDirection: "row", marginTop: "3%" }, this.props.messageType === MESSAGETYPE.INPUT ? {} : { direction: "rtl" }]}>
                    <View style={{ width: "50%", height: "100%" }}>
                        <View style={{ width: "15%", height: "90%",  marginBottom:"10%"}}>
                            <CheckButton disabled={false} callback={() => { this.props.messageType === MESSAGETYPE.INPUT ? this.props.okHandler() : this.props.closeHandler() }} />
                        </View>
                    </View>
                    {this.props.messageType === MESSAGETYPE.INPUT && 
                    <View style={{ width: "50%", height: "80%", direction: "rtl" }}>
                        <View style={{ backgroundColor: "#1A1A1A", width: "10%", height: "80%", marginBottom:"10%"}}>
                            <CloseButton disabled={false} onPress={() => { this.props.closeHandler() }} /></View>
                    </View >}
                </View>
            </View>
        </ScrollView>



    </SafeAreaView>
    }
    
}