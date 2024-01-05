import React from "react";

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
 } from "react-native";

 const styles=StyleSheet.create({
    background:{
        backgroundColor:"#000000AA",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        flex:1,
        flexDirection:"row"

    },
    message:{
        backgroundColor:"#000",
        borderBottomWidth:3,
        borderTopWidth:3,
        borderStartWidth:3,
        borderEndWidth:3,
        justifyContent:"center",
        alignItems:"center",
        width:"40%",
        height:"60%"
    },
    successMessage:{
        color:"#8FD14F",
    },
    warningMessage:{
        color:"#FEF445",
    },
    errorMessage:{
        color:"#FF0000",
    }
 })

 export enum MESSAGETYPE{
    SUCCESS,
    WARNING,
    ERROR,
 }
 export const AlertDialog=(props:{messageType:MESSAGETYPE,message:string})=>{
     const textColor=props.messageType===MESSAGETYPE.ERROR?{color:"#8FD14F"}:
     props.messageType===MESSAGETYPE.SUCCESS?{color:"#8FD14F"}:
     props.messageType===MESSAGETYPE.WARNING?{color:"#FF0000"}:{color:"3000"};
    return <SafeAreaView style={styles.background}>
        <Text style={[styles.message,textColor]}>{props.message}</Text>
    </SafeAreaView>
 }