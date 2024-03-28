
import React, { ReactNode } from "react"
import { View,Text } from "react-native"
import { TextBox } from "../Components/Textboxes"
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox"
import CameraScreen from "../Components/CameraScreen"


interface ConnectDeviceProps{
    cameraActive:boolean,
    connectionHandler:(state:boolean)=>void,
    handleVisible:(connection:boolean)=>void,
    setConnection?:(connection:boolean)=>void
}


export class ConnectDeviceDialog extends React.Component<ConnectDeviceProps> {
    constructor(props:ConnectDeviceProps){
        super(props);
       
    }
    componentDidMount(): void {
      
    }
    render(): React.ReactNode {
        const txtbox = <View key={0} style={{ marginTop: "10%" }}>
            <TextBox value="" placeHolder="ENTER DEVICE ID" readonly={false}/>
        </View>


        
        const camera= <CameraScreen key={1} cameraActive={this.props.cameraActive}/>
        return <DialogBox header="CONNECT DEVICE" messageType={MESSAGETYPE.INPUT} message="--deviceConnection--" subView={[camera]} closeHandler={() =>{
            this.props.handleVisible(false);
        } } okHandler={()=>void{

            
        }} />
    }
}