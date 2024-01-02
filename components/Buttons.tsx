import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    buttonList: {
        width: "48%",
        height: "30%",
        color: "#FFFFFF",
        margin: "1%",
        backgroundColor: "#fff",
        fontFamily: "Georgia",
        alignItems: "center"
    },
    checkButton: {
        width: "100%",
        height: "100%",
        color: "#FFFFFF",
        margin: "1%",
        backgroundColor: "#fff",
        fontFamily: "Georgia",
        alignItems: "flex-end"
    },
    buttonViewImage: {
        width: "100%",
        height: "100%",
    
    },
    buttonViewText: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "700"
    }
})
export const MenuButton=(props:{readOnly:boolean,src:any})=>{
    return <TouchableOpacity style={styles.buttonList} disabled={props.readOnly} >
    <Image source={props.src} style={styles.buttonViewImage}></Image>
</TouchableOpacity>
}

export const CheckButton=(props:{readOnly:boolean,callback:any})=>{
    return <TouchableOpacity style={styles.buttonList} disabled={props.readOnly} onPress={props.callback()}>
    <Image source={require("../assets/button_check.png")} style={styles.buttonViewImage}></Image>
</TouchableOpacity>
}


export const BackButton=(props:{readOnly:boolean,callback:any})=>{
    return <TouchableOpacity style={styles.buttonList} disabled={props.readOnly} onPress={props.callback()}>
    <Image source={require("../assets/button_back.png")} style={styles.buttonViewImage}></Image>
</TouchableOpacity>
}
export const ListButton=(props:{readOnly:boolean})=>{
    return <TouchableOpacity style={styles.buttonList} disabled={props.readOnly} >
    <Image source={require("../assets/button_check.png")} style={styles.buttonViewImage}></Image>
</TouchableOpacity>
}