import React from "react";
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox";
import { NumericPad } from "../Components/NumericPad";
import { StyleSheet, Text, View } from "react-native";
import { LetGoProgressBar } from "../Components/LetGoProgressBar";
import { SelectOption } from "../Components/SelectOptions";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { TableView } from "../Components/TableView";
import { RADAL_ITEM_COLOR, Radar, RadarItem } from "../Components/Radar";

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

const styles=StyleSheet.create({
    pilotBackground:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        backgroundColor:"#1A1A1A"
       
    },
    paxList:{
        width:"35%",
        height:"100%"
    },
    radar:{
        width:"55%",
        height:"100%"
    },
    menu:{
        width:"10%",
        height:"100%"
    }
})
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

      this.setState({passedAllTest:false,jumpTypeDialog:false})
        
    }

    displayJumpType(visible:boolean){
        this.setState({jumpTypeDialog:visible,altitudeDialog:!this.state.altitudeDialog})
    }

    

    render(): React.ReactNode {
        const LetGoDialog =<LetGoProgressBar style={{width:"100%",height:"100%", backgroundColor:"#0009"}} progress={this.state.progress}/>
        const items:Array<RadarItem>=[
            {ID:"PAX005",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX006",color:RADAL_ITEM_COLOR.YELLOW},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX006",color:RADAL_ITEM_COLOR.YELLOW},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.RED},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX008",color:RADAL_ITEM_COLOR.RED},
            {ID:"PAX006",color:RADAL_ITEM_COLOR.YELLOW},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.RED},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX006",color:RADAL_ITEM_COLOR.YELLOW},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.RED},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
            {ID:"PAX007",color:RADAL_ITEM_COLOR.GREEN},
    ];
        const PilotMode=
          <View style={styles.pilotBackground}>
                <View style={styles.paxList}>
                    
                    <TableView rows={[["PAX005"],["PAX006"],["PAX007"],["PAX008"]]} refresh={false} loaded={()=>{}}/>
                    
                </View>
                <View style={styles.menu}></View>
                <View style={styles.radar}>
                        <Radar key={1} items={ items} alarm={false}/>
                </View>

        </View>
        return PilotMode;
      //  return <View style={{width:"100%",height:"90%", alignContent:"center", justifyContent:"center"}}>    
        //        {this.state.passedAllTest && LetGoDialog}
        //</View>
    }
}