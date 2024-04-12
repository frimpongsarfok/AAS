import React, { ReactNode } from "react";
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

interface MapState {

}
interface MapProps {

}

const styles = StyleSheet.create({
    background: {
        width: "90%",
        height: "90%",
        backgroundColor: "#1A1A1A",

    }
})
export class Map extends React.Component<MapProps, MapState>{
    constructor(props: MapProps) {
        super(props)
    }


    render(): React.ReactNode {

        return <View style={styles.background}>
            <MapView style={StyleSheet.absoluteFill} mapType="satellite" initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
        </View>
    }
}