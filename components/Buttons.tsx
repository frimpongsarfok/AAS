import React from "react"
import { GestureResponderEvent, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    buttonList: {
        width: "48%",
        height: "30%",
        color: "#FFFFFF",
        margin: "1%",
        backgroundColor: "#fff",
        fontFamily: "Georgia",
        alignItems: "center",
       
    },
    checkButton: {
        width: "100%",
        height: "100%",
        color: "#FFFFFF",
        margin: "1%",
        backgroundColor: "#000",
        fontFamily: "Georgia",
        alignItems: "flex-end",
        justifyContent:"center"
    },
    buttonViewImage: {
        width: "100%",
        height: "100%",

    },
    buttonViewText: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "700"
    },
    closeButton: {
        width: "5%", 
        height: "70%",
        top:2,
        left:10 
    },
    selectedButtonBackground1:{
        backgroundColor:"#0CA789",
        color:"#fff",
        fontSize:25,
        textAlign:"center",
        fontFamily:"Georgia"
    },
    selectedButtonBackground2:{
        backgroundColor:"#000",
        color:"#8FD14F",
        fontSize:25,
        textAlign:"center",
        fontFamily:"Georgia",
    }

})
export const MenuButton = (props: { disabled: boolean, src: any, onPress: () => void }) => {

    return <TouchableOpacity style={styles.buttonList} disabled={props.disabled} onPress={props.onPress} >
        <Image source={props.src} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}

export const CheckButton = (props: { disabled: boolean, callback: ()=>void }) => {
    return <TouchableOpacity style={styles.buttonList} disabled={props.disabled} onPress={props.callback}>
        <Image source={require("../assets/button_check.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}


export const BackButton = (props: { disabled: boolean, callback: any }) => {
    return <TouchableOpacity style={styles.buttonList} disabled={props.disabled} onPress={props.callback()}>
        <Image source={require("../assets/button_back.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}
export const ListButton = (props: { disabled: boolean }) => {
    return <TouchableOpacity style={styles.buttonList} disabled={props.disabled} >
        <Image source={require("../assets/button_check.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}
export const CloseButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={styles.closeButton} onPress={props.onPress}>
        <ImageBackground source={require("../assets/close.png")} style={{ width: "100%", height: "100%" }} />
    </TouchableOpacity>
}


export const SelectableButton = (props: { value:string,selected:boolean,disabled: boolean, onPress: any }) => {
    return <TouchableOpacity style={styles.checkButton} onPress={props.onPress}>
        <Text style={[{ width: "100%", height: "auto"},props.selected?styles.selectedButtonBackground1:styles.selectedButtonBackground2]}> {props.value}</Text>
      
    </TouchableOpacity>
}