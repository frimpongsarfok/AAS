import React, { useEffect, useState } from "react";

import {
    ActivityIndicator,
    Image,
    ImageBackground,
    SafeAreaView,
    SectionList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen'
import { BackButton, CheckButton } from "../components/Buttons";
import { TableView } from "../components/TableView";

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
        margin: "5%",
        alignItems: "center",
        backgroundColor: "#000000"

    },
    backgroundImage: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

    }
});
function JoinChalk(): React.JSX.Element {
    const [scaning, setScaning] = useState(false);
    const tableData=Array<Array<string>>();
    tableData.push(["Device 1"]);
    tableData.push(["Device 1"]);
    tableData.push(["Device 2"]);
    tableData.push(["Device 3"]);
    tableData.push(["Device 4"]);
    tableData.push(["Device 11"]);
    tableData.push(["Device 22"]);
    tableData.push(["Device 33"]);
    tableData.push(["Device 44"]);
     //setScaning(true);

    return <SafeAreaView style={styles.background}>
        <ImageBackground source={require("../assets/subBackground.png")} style={styles.backgroundImage}>
            <View style={{ width: "70%", height: "60%", borderColor: "#8FD14F", borderEndWidth: 3, borderStartWidth: 3, justifyContent: "center", alignItems: "center" }}>
                <TableView rows={tableData} refresh={scaning} loaded={setScaning}></TableView>

            </View>
            <View style={{ width: "15%", height: "20%", position: "absolute", bottom: 0, left: 30 }}>
                <BackButton readOnly={false} callback={() => { }} />
            </View>
            <View style={{ width: "10%", height: "20%", position: "absolute", bottom: 0, right: 0 }}>
                <CheckButton readOnly={false} callback={() => { }} />
            </View>

        </ImageBackground>
    </SafeAreaView>
}
export default JoinChalk;