import React from "react";
import {
    Button,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { MenuButton } from "../components/Buttons";


const MainMenu=() =>{
    return <SafeAreaView style={{ flex: 1, flexDirection: "row", backgroundColor: "#243712" }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", backgroundColor: "#000000", margin: 30, padding: "3%" }}>
            <MenuButton src={require("../assets/connectdevice.png")} readOnly={false}/>
            <MenuButton src={require("../assets/joinchalk.png")} readOnly={false}/>
            <MenuButton src={require("../assets/testdevice.png")} readOnly={false}/>
            <MenuButton src={require("../assets/data.png")} readOnly={false}/>
            <MenuButton src={require("../assets/letgo.png")} readOnly={false}/>
        </View>
    </SafeAreaView>
}

export default MainMenu;