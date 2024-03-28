import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
import { Camera, useCameraDevices, CameraDevice, useCodeScanner } from 'react-native-vision-camera';
// import Orientation, { useOrientationChange } from 'react-native-orientation-locker';

interface CameraProps{
    cameraActive:boolean
}
const CameraScreen: React.FC<CameraProps> = ({cameraActive}) => {
    const [rotation, setRotation] = useState('0deg');

    const devices = useCameraDevices();
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes: any) => {
            console.log(`Scanned ${codes} codes!`)
        }
    })

    // const orien= useOrientationChange((orientation) => {
    //     switch (orientation) {
    //     case 'LANDSCAPE-LEFT':
    //         setRotation('90deg');
    //         break;
    //     case 'LANDSCAPE-RIGHT':
    //         setRotation('-90deg');
    //         break;
    //     case 'PORTRAIT-UPSIDEDOWN':
    //         setRotation('180deg');
    //         break;
    //     case 'PORTRAIT':
    //     default:
    //         setRotation('0deg');
    //         break;
    //     }
    // });
    const device: CameraDevice | undefined = devices[0]; // Use the back camera
    const [hasPermission, setHasPermission] = useState<boolean>(false);


    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermission();
            setHasPermission(cameraPermission === 'granted');
        })();
    }, []);
    // For Android, you may also need to check for additional permissions
    const requestPermissionsAndroid = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);
            if (
                granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
            ) {
                console.log('Camera permissions granted');
                setHasPermission(true);
            } else {
                console.log('Camera  permissions denied');
                setHasPermission(false);
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            requestPermissionsAndroid();
        }
    }, []);

    if (device === null || !hasPermission) {
        console.log("no camera device!!!");
        return <View />
    }
    return (
        <View style={styles.container}>
            <Camera
                style={{ width: "100%", height: "100%" }}
                device={device}
                isActive={cameraActive}
                codeScanner={codeScanner}


            />
            {/* You can also add other UI components that you need */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,

    },
});

export default CameraScreen;
