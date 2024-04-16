import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
import { Camera, useCameraDevices, CameraDevice, useCodeScanner } from 'react-native-vision-camera';
import  { useOrientationChange } from 'react-native-orientation-locker';

import { useLayoutEffect, useRef } from 'react';
import { gravity } from 'react-native-sensors';

type Rotation = 'top' | 'down' | 'right' | 'left';

const useDeviceRotationSensor = (
  callback: (rotation: Rotation, degree: number) => void,
) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  useLayoutEffect(() => {
    // We use gravity sensor here because react-native-orientation
    // can't detect landscape orientation when the device's orientation is locked
    const subscription = gravity.subscribe(({ x, y }) => {
      const radian = Math.atan2(y, x);
      const degree = (radian * 180) / Math.PI;

      let rotation: Rotation = 'left';
      if (degree > -135) rotation = 'top';
      if (degree > -45) rotation = 'right';
      if (degree > 45) rotation = 'down';
      if (degree > 135) rotation = 'left';

      if (Platform.OS === 'android') {
        rotation = 'right';
        if (degree > -135) rotation = 'down';
        if (degree > -45) rotation = 'left';
        if (degree > 45) rotation = 'top';
        if (degree > 135) rotation = 'right';
      }

      callbackRef.current(rotation, degree);
    });
    return () => subscription.unsubscribe();
  }, []);
};

interface CameraProps{
    cameraActive:boolean
}
const CameraScreen: React.FC<CameraProps> = ({cameraActive}) => {
    const [rotation, setRotation] = useState(Orientation);

    const devices = useCameraDevices();
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes: any) => {
            console.log(`Scanned ${codes} codes!`)
        }
    })

  
   
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
        return <View > </View>
    }
    useOrientationChange((orientation) =>{ 
        switch (orientation) {
            case 'LANDSCAPE-LEFT':
                setRotation( 'landscape-left' );
                break;
            case 'LANDSCAPE-RIGHT':
                setRotation('landscape-right');
                break;
            case 'PORTRAIT-UPSIDEDOWN':
                setRotation('portrait-upside-down');
                break;
            case 'PORTRAIT':
            default:
                setRotation('portrait');
                break;
        }

        return orientation; // Add this line to return the current orientation value
    });

    useDeviceRotationSensor((rotation) => {
        // These still work when the device orientation is unlocked
        setCameraOrientation('landscapeRight');
        if (rotation === 'top') setCameraOrientation('portrait');
        if (rotation === 'right') setCameraOrientation('landscapeLeft');
        if (rotation === 'down') setCameraOrientation('portraitUpsideDown');
        if (rotation === 'left') setCameraOrientation('landscapeRight');
      });
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
function setCameraOrientation(arg0: string) {
    throw new Error('Function not implemented.');
}

