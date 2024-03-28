import React from "react"
import { GestureResponderEvent, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "100%",
        margin: "1%",
    },

    buttonViewImage: {
            flex:1, 
            width:null , 
            height:null, 
            resizeMode:"contain"

    },
    buttonViewText: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "700"
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

    return <TouchableOpacity style={styles.button} disabled={props.disabled} onPress={props.onPress} >
        <Image source={props.src} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}

export const CheckButton = (props: { disabled: boolean, callback: ()=>void }) => {
    return <TouchableOpacity style={styles.button} disabled={props.disabled} onPress={props.callback}>
        <Image source={require("../assets/button_check.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}


export const BackButton = (props: { disabled: boolean, callback: any }) => {
    return <TouchableOpacity style={styles.button} disabled={props.disabled} onPress={props.callback()}>
        <Image source={require("../assets/button_back.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}
export const ListButton = (props: { disabled: boolean }) => {
    return <TouchableOpacity style={styles.button} disabled={props.disabled} >
        <Image source={require("../assets/button_check.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}
export const CloseButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={require("../assets/close.png")} style={styles.buttonViewImage}/>
    </TouchableOpacity>
}
export const EditButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={require("../assets/edit.png")} style={styles.buttonViewImage} />
    </TouchableOpacity>
}

export const SelectableButton = (props: { value:string,selected:boolean,disabled: boolean, onPress: any }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={[{ width: "100%", height: "auto", padding:10},props.selected?styles.selectedButtonBackground1:styles.selectedButtonBackground2]}> {props.value}</Text>
      
    </TouchableOpacity>
}