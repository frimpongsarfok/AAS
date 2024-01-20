import React, { Dispatch, SetStateAction, useState } from "react";


import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from "react-native";
import { CheckButton, CloseButton, MenuButton, SelectableButton } from "../components/Buttons";
import { AlertDialog, MESSAGETYPE } from "../components/AlertDialog";

const styles = StyleSheet.create({
    dialog: {
        width: "90%",
        height: "90%",
        backgroundColor: "#1A1A1A",
        alignItems: "center",


    }
})



const MainMenu = () => {

    const [dialogVisible, setDialogVisible] = useState(false);
    const [selected, setSelected] = useState("make")
    const [connected, setConnected] = useState(false);
    const JoinDialog = () => {

        return (
            <View style={styles.dialog} >
                <View style={{ width: "100%", height: "10%", direction: "rtl", top: 10 }}>
                    <CloseButton onPress={() => setDialogVisible(!dialogVisible)} disabled={false} />
                </View>
                <View style={{ width: "50%", height: "50%", alignSelf: "center" }}>
                    <Text style={{ color: "#8FD14F", fontSize: 30, fontFamily: "Georgia", width: "100%", textAlign: "center", marginBottom: "15%" }}>SELECT OPTION</Text>
                    <View style={{ width: "100%", height: "30%", marginBottom: 10 }}>
                        <SelectableButton value="MAKE CHALK" selected={selected === "make" ? true : false} disabled={false} onPress={() => { setSelected("make") }} />
                    </View>
                    <View style={{ width: "100%", height: "30%", marginBottom: 10 }}>
                        <SelectableButton value="JOIN CHALK" selected={selected === "create" ? true : false} disabled={false} onPress={() => { setSelected("create") }} />
                    </View>
                </View>
                <View style={{ width: "100%", height: "40%", direction: "rtl", right: 10 }}>
                    <View style={{ width: "10%", height: "100%", top: 70 }}>
                        <CheckButton disabled={false} callback={() => { setDialogVisible(!dialogVisible) }} />
                    </View>

                </View>


            </View>
        )
    }
    return <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#243712", justifyContent: "center", alignItems: "center" }}>
        {dialogVisible && <JoinDialog />}
        {!dialogVisible && <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", backgroundColor: "#000000", margin: 30, padding: "3%", }}>
            <View style={{ width: "45%", height: "25%", margin:"2%" }}>
                <MenuButton src={require("../assets/connectdevice.png")} disabled={false} onPress={() => { }} />

            </View>
            <View style={{ width: "45%", height: "25%" , margin:"2%"}}>

                <MenuButton src={require("../assets/joinchalk.png")} disabled={false} onPress={() => { setDialogVisible(!dialogVisible) }} />

            </View>
            <View style={{ width: "45%", height: "25%" , margin:"2%"}}>
                <MenuButton src={require("../assets/testdevice.png")} disabled={false} onPress={() => { }} />

            </View>
            <View style={{ width: "45%", height: "25%", margin:"2%" }}>
                <MenuButton src={require("../assets/data.png")} disabled={false} onPress={() => { }} />
            </View>

            <View style={{ width: "100%", height: "25%",margin:"2%", }}>
                <View style={{width:"45%",marginStart:"49%"}}><MenuButton src={require("../assets/letgo.png")} disabled={false} onPress={() => { console.log("connected :" + connected); setConnected(!connected) }} /></View>
            </View>


        </View>}
        {!connected &&  <AlertDialog messageType={MESSAGETYPE.SUCCESS} message="CONNECTED" closeHandle={()=>setConnected(!connected)} />}



    </SafeAreaView>
}

export default MainMenu;