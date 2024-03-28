import React from "react";
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox";
import { NumericPad } from "../Components/NumericPad";
import { Text, View } from "react-native";
import { LetGoProgressBar } from "../Components/LetGoProgressBar";
import { SelectOption } from "../Components/SelectOptions";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

enum JUMPTYPE{NONE,HOLYN,COMBAT}

interface LetGoProps {
    deviceConnected: boolean
    deviceIsTested: boolean,
    
    paxDataSet: boolean,
    joinedChalk: boolean,
    handleVisible: (visible: boolean) => void

}

interface LetGoState {
    header: String,
    altitude: number
    altitudeDialog:boolean
    passedAllTest:boolean
    jumpType:JUMPTYPE
    progress:Float,
    jumpTypeDialog:boolean


}

export class LetGo extends React.Component<LetGoProps, LetGoState>{
    constructor(props: LetGoProps) {
        super(props);
        this.state = {
            header: "ALTITUDE",
            altitude: 0,
            progress: 0.0,
            altitudeDialog:true,
            passedAllTest:true,
            jumpType:JUMPTYPE.NONE,
            jumpTypeDialog:false
        }

     
    
    }
    handleNumericPadPress(number: number): void {
        this.setState({ altitude: number })
    }
    
    setJumpType(jump:number):void{
        this.setState({jumpType:jump})
    }

    setPassedAllTest(passed:boolean):void{
        [.1,.2,.3,.4,.7,1].forEach(element => {
            setTimeout(()=>{
                this.setState({passedAllTest:(element<1?true:false),progress:element})
            },1000*(+element))
           
        });

        //this.setState({passedAllTest:false,jumpTypeDialog:false})
        
    }

    displayJumpType(visible:boolean){
        this.setState({jumpTypeDialog:visible,altitudeDialog:!this.state.altitudeDialog})
    }

    

    render(): React.ReactNode {
        const LetGoDialog =<LetGoProgressBar style={{width:"100%",height:"100%", backgroundColor:"#0009"}} progress={this.state.progress}/>
        return <View style={{width:"100%",height:"90%", alignContent:"center", justifyContent:"center"}}>    
                {this.state.passedAllTest && LetGoDialog}
        </View>
    }
}