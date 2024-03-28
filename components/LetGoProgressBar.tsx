import React, { ReactNode } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress"
import { Float } from "react-native/Libraries/Types/CodegenTypes";


interface LetGoProgressBarProps{
    style:Object,
    progress:Float
}

const styles=StyleSheet.create({
    Image:{
        height:"100%",
        width:"100%",
        backgroundColor:"#fff",
        justifyContent:"center",
        alignContent:"center",
        position:"relative"
    }
})
export class LetGoProgressBar extends React.Component<LetGoProgressBarProps>{

    constructor(props:LetGoProgressBarProps){
        super(props)
    }
    render():ReactNode{
        return <View style={this.props.style}>
                <Image style={{flex:1, width:null , height:null, resizeMode:"contain" }} source={require("../assets/LetGoProgressBar.png")}/>
                <Progress.Bar progress={this.props.progress}  style={{position:"absolute", top:"75%", left:"40%",  borderColor:"#8FD14F"} } color="#8FD14F"/>
            </View>

       
    }
}