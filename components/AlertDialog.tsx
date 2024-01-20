import React, { ReactElement } from "react";

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { CheckButton, CloseButton } from "./Buttons";

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#000a",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "absolute",


    },
    message: {
        backgroundColor: "#000",
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderStartWidth: 3,
        borderEndWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
        height: "60%",
        opacity: 1,
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
    INPUT // Text Box input
}

type Props = {
    messageType: MESSAGETYPE,
    message: string,
    textBox?: []
}
export const AlertDialog = (props: { messageType?: MESSAGETYPE, message: string, textBox?: [],closeHandle:()=>void, okHandle?:()=>void }) => {
    
    const textColor = props.messageType === MESSAGETYPE.ERROR ? { color: "#8FD14F" } :
        props.messageType === MESSAGETYPE.SUCCESS ? { color: "#8FD14F" } :
            props.messageType === MESSAGETYPE.WARNING ? { color: "#FF0000" } : { color: "#8FD14F" };

    return <SafeAreaView style={styles.background}>
        <View style={[styles.message]}>
         
            <View style={{ height: "15%", width: "100%", backgroundColor: "#222" }}>
                <Text style={{width:"100%", textAlign:"center",color:"#8FD14F", fontWeight:"800",fontSize:20}}>Hearder</Text>
            </View>
            <View style={{ height: "70%", width: "95%", backgroundColor: "#000" }}>
                {props.messageType!==MESSAGETYPE.INPUT && <Text style={[{textAlign:"center",margin:"2%",justifyContent:"center"},textColor]}>{props.message}</Text>}
            </View>
            <View style={[{height: "15%", backgroundColor: "#1A1A1A", width: "100%", flexDirection: "row"},props.messageType===MESSAGETYPE.INPUT?{}:{direction:"rtl"}] }>
                <View style={{ width: "50%", height: "100%" }}>
                    <View style={{ width: "30%", height: "100%" }}>
                        <CheckButton disabled={false} callback={() => {props.messageType===MESSAGETYPE.INPUT?props.okHandle:props.closeHandle() }} />
                    </View>     
                </View>
                {props.messageType===MESSAGETYPE.INPUT&& <View style={{ width: "50%", height: "100%", direction: "rtl" }}>
                    <View style={{ backgroundColor:"#1A1A1A",width: "30%", height: "100%", }}>
                        <CloseButton disabled={false} onPress={() => {props.closeHandle() }} /></View>
                </View >}
            </View>
        </View>


    </SafeAreaView>
}