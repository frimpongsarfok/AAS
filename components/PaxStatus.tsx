import React from "react";
import { StyleSheet, View,Text, TouchableOpacity } from "react-native";


interface PaxStatusProps {
    paxNumber: string,
    altitude: number,
    avgSpeed: number,
    display:(visible:boolean)=>void
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    statusBackground: {
        width: "70%",
        height: "70%",
        borderWidth: 3,
        borderColor: "#8FD14F",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1A1A1A"

    },
    paxNumber: {
        color: "#8FD14F",
        fontSize: 24,
        width: "100%",
        height: "30%",
        textAlign:"center",
        fontWeight:"700",
    }
})
export class PaxStatus extends React.Component<PaxStatusProps>{
    constructor(props: PaxStatusProps) {
        super(props)
    }
    render(): React.ReactNode {
        return <TouchableOpacity style={styles.background} onPress={()=>this.props.display(false)}>
            <View style={styles.statusBackground}>
                <Text style={styles.paxNumber}>{this.props.paxNumber}</Text>
                <Text style={styles.paxNumber}>ALT : {this.props.altitude}</Text>
                <Text style={styles.paxNumber}>F/S: {this.props.avgSpeed}</Text>
            </View>
        </TouchableOpacity>
    }
}