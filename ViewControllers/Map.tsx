import React, { ReactNode } from "react";
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox";
import { StyleSheet, View } from "react-native";

interface MapState{

}
interface MapProps{

}

const styles=StyleSheet.create({
    background:{
        width:"90%",
        height:"90%",
        backgroundColor: "#1A1A1A",

    }
})
export class Map extends React.Component<MapProps,MapState>{
    constructor(props:MapProps){
        super(props)
    }


    render(): React.ReactNode {
      
       
        return <View style={styles.background}>

        </View>
    }
}