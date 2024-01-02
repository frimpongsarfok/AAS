import React, { Component } from "react";

import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native"
import { BackButton, CheckButton } from "../components/Buttons";
import { TextBox } from "../components/Textboxes";



const styles = StyleSheet.create({
    background: {
        backgroundColor: "#00000000",
        padding: 5,
        flex: 1,
        flexDirection: "row",
    },
    subView: {
        width: "50%",
        height: "70%",
        padding: "5%",
        alignItems: "center",
        backgroundColor: "#000000"

    },
    backgroundImage: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

    }

});
export default class ConnectDevice extends Component {
    componentDidMount(): void {

    }
    render(): React.ReactElement {
        return (<SafeAreaView style={styles.background} >
            <ImageBackground source={require("../assets/subBackground.png")} style={styles.backgroundImage}>
                    <View style={styles.subView}>
                        <Text style={{ color: "#8FD14F", fontWeight: "bold", fontSize: 20, marginBottom: 40, fontFamily: "Georgia" }}>ENTER AAS DEVICE ID</Text>
                        <TextBox placeHolder='enter ID here...' />
                    </View>
                    <View style={{ width: "15%", height: "20%", position: "absolute", bottom: 0, left: 30 }}>
                        <BackButton readOnly={false} callback={() => { }} />
                    </View>
                    <View style={{ width: "10%", height: "20%", position: "absolute", bottom: 0, right: 0 }}>
                        <CheckButton readOnly={false} callback={() => { }} />
                    </View>
            </ImageBackground>
        </SafeAreaView>)
    }
};