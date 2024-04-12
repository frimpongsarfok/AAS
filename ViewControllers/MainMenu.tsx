import React, { ReactNode } from "react";
import {
    SafeAreaView,
    View
} from "react-native";
import { MenuButton } from "../Components/Buttons";
import { PaxData } from "./PaxData";
import { ConnectDeviceDialog } from "./ConnectDevice";
import { JoinDialog } from "./JoinChalk";
import { LetGo } from "./LetGo";
import { JumpData } from "./JumpData";

// const styles = StyleSheet.create({
//     dialog: {
//         width: "90%",
//         height: "90%",
//         backgroundColor: "#1A1A1A",
//         alignItems: "center",
//     }
// })

// type PaxData = {
//     id: string,
//     name: string,
//     height: Number,
//     age: Number
// }

interface MainMenuState {
    connectionHandler?: (state: boolean) => void,
    connectionDialog: boolean
    joinDialog: boolean,
    paxDataDialog: boolean,
    mainMenu: boolean,
    letGoDialog: boolean,
    jumpDataDialog: boolean

}
interface MainMenuProps {
    connectionHandler: (state: boolean) => void
    joinHandler: (state: {}) => void
}
export class MainMenu extends React.Component<MainMenuProps, MainMenuState>{
    constructor(props: MainMenuProps) {
        super(props)
        this.state = {
            connectionDialog: false,
            joinDialog: false,
            paxDataDialog: false,
            letGoDialog: false,
            mainMenu: true,
            jumpDataDialog: false

        }
        this.handleJoinDialog = this.handleJoinDialog.bind(this);
        this.handlePaxDataDialog = this.handlePaxDataDialog.bind(this);
        this.handleConnectionDialog = this.handleConnectionDialog.bind(this);
        this.handleLetGoDialog = this.handleLetGoDialog.bind(this);
        this.handleJumpDataDialog = this.handleJumpDataDialog.bind(this);
    }
    handleJoinDialog(visible: boolean): void {
        this.setState({ joinDialog: visible, mainMenu: !this.state.mainMenu })
    }
    handlePaxDataDialog(visible: boolean): void {
        this.setState({ paxDataDialog: visible, mainMenu: !this.state.mainMenu })
    }
    handleConnectionDialog(visible: boolean) {
        this.setState({ connectionDialog: visible, mainMenu: !this.state.mainMenu })
    }
    handleLetGoDialog(visible: boolean) {
        this.setState({ letGoDialog: visible, mainMenu: !this.state.mainMenu })
    }
    handleJumpDataDialog(visible: boolean) {
        this.setState({ jumpDataDialog: visible, mainMenu: !this.state.mainMenu })
    }
    menuList(): ReactNode {
        return <View style={{ width: "90%", height: "90%", justifyContent: "center" }}>
            <View style={{ width: "100%", height: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly", backgroundColor: "#1A1A1A" }}>
                <View style={{ width: "45%", height: "32%", }}>
                    <MenuButton src={require("../assets/connectDevice.png")} disabled={false} onPress={() => { this.handleConnectionDialog(true) }} />
                </View>
                <View style={{ width: "45%", height: "32%", }}>
                    <MenuButton src={require("../assets/joinChalk.png")} disabled={false} onPress={() => { this.handleJoinDialog(true) }} />
                </View>
                <View style={{ width: "45%", height: "32%", }}>
                    <MenuButton src={require("../assets/testDevice.png")} disabled={false} onPress={() => { }} />
                </View>
                <View style={{ width: "45%", height: "32%", }}>
                    <MenuButton src={require("../assets/JumpData.png")} disabled={false} onPress={() => { this.handleJumpDataDialog(true) }} />
                </View>

                <View style={{ width: "45%", height: "32%", }}>
                    <MenuButton src={require("../assets/PaxData.png")} disabled={false} onPress={() => { this.handlePaxDataDialog(true) }} />
                </View>
                <View style={{ width: "45%", height: "32%", }}>
                    <MenuButton src={require("../assets/letGo.png")} disabled={false} onPress={() => { this.handleLetGoDialog(true) }} />
                </View>

            </View>
        </View>

    }
    render(): React.ReactNode {
        return <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#243712", justifyContent: "center", alignItems: "center" }}>
            {this.state.mainMenu && this.menuList()}
            {this.state.connectionDialog && <ConnectDeviceDialog cameraActive={this.state.connectionDialog} connectionHandler={this.props.connectionHandler} handleVisible={this.handleConnectionDialog} />}
            {this.state.joinDialog && <JoinDialog handleVisible={this.handleJoinDialog} />}
            {this.state.paxDataDialog && <PaxData handleVisible={this.handlePaxDataDialog} />}
            {this.state.letGoDialog && <LetGo deviceConnected={false} deviceIsTested={false} paxDataSet={false} joinedChalk={false} handleVisible={this.handleLetGoDialog} />}
            {this.state.jumpDataDialog && <JumpData handleVisible={this.handleJumpDataDialog} />}

        </SafeAreaView>
    }
}

export default MainMenu;