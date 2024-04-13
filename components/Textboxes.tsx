import React, { useState } from "react";
import { View,TextInput, StyleSheet, ImageBackground, StyleProp, ViewStyle, ColorValue } from "react-native";

const styles=StyleSheet.create({
    textbox:{
        width: "100%",
        height: 15,
        marginTop:10,
        alignItems:"stretch",
        borderBottomWidth:5,
        borderColor:"#8FD14F",
        color:"#33FF99",
        textAlign:"center",
        fontSize:20,
        padding:5,
        fontFamily:"Georgia",
        fontWeight:"bold",
        
    },

})


export const TextBox=(props:{value:string,placeHolder:string,style?:Object, readonly:boolean, onChangeText?:(text:string) => string, placeholderTextColor?:ColorValue}, )=>{
   return <TextInput value={props.value} style={props.style?props.style:styles.textbox} placeholder={props.placeHolder} onChangeText={props.onChangeText} readOnly={props.readonly} placeholderTextColor={props.placeholderTextColor}/> 
}