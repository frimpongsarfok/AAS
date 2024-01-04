import React from "react";
import { View,TextInput, StyleSheet, ImageBackground, StyleProp, ViewStyle } from "react-native";

const styles=StyleSheet.create({
    textbox:{
        width: "100%",
        height: "auto",
        marginBottom:10,
        alignItems:"stretch",
        backgroundColor:"#0CA789",
        borderBottomWidth:5,
        borderColor:"#8FD14F",
        color:"#33FF99",
        textAlign:"center",
        fontSize:24
    },

})
export const TextBox=(props:{value:string,placeHolder:string} )=>{
   return <TextInput value={props.value} style={styles.textbox} placeholder={props.placeHolder}/> 
}