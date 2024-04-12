
import React, { ReactNode } from "react"
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native"
import { DialogBox, MESSAGETYPE } from "../Components/DialogBox";
import { TextBox } from "../Components/Textboxes";
import { NumericPad } from "../Components/NumericPad";
import { SelectOption } from "../Components/SelectOptions";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        backgroundColor: "#243712",
        position: "absolute"
    },
    row: {
        width: "100%",
        height:"45%",
        flexDirection:"row",
        flexWrap:"wrap",
        marginBottom:"2%",
        backgroundColor: "#1A1A1A",
        borderBottomWidth: 2,
        borderBottomColor: "#8FD14F",
        paddingTop:"2%",
        paddingBottom:"5%",
        color:"#8FD14F"


    },
    rowBackground:{
        height:100,
        width:"100%",
        
        marginTop:"3%"
    }
    



});

enum JUMPTYPE{NONE,HOLYN,COMBAT}
export interface JumpDataProps {
    handleVisible:(visible:boolean)=>void
}
interface JumpDataState {
    data: Array<Object>,
    header:string,
    message:string,
    messageType:MESSAGETYPE
    height?:String,
    weight?:String,
    age?:Number


    altitude: number
    altitudeDialog:boolean
    passedAllTest:boolean
    jumpType:JUMPTYPE
    progress:Float,
    jumpTypeDialog:boolean

}
export class JumpData extends React.Component<JumpDataProps, JumpDataState> {
    constructor(props: JumpDataProps) {
        super(props)

        this.state = {
            data: [{ "HEIGHT": "6'1" }, { "WEIGHT": "185 LBS" }, { "AGE": "28" }],
            message:"",
            messageType:MESSAGETYPE.INPUT,
            header: "ALTITUDE",
            altitude: 0,
            progress: 0.0,
            altitudeDialog:true,
            passedAllTest:false,
            jumpType:JUMPTYPE.NONE,
            jumpTypeDialog:false
        };
        this.handleNumericPadPress = this.handleNumericPadPress.bind(this);
        this.setJumpType=this.setJumpType.bind(this);
        this.setPassedAllTest=this.setPassedAllTest.bind(this);
        this.displayJumpType=this.displayJumpType.bind(this);
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

    
    makeRows(): ReactNode {
        return <View style={styles.rowBackground}>
            {this.state.data.map((row: {}, idx: number) =>{
                return <View key={idx} style={styles.row}>
                    <Text key={idx+"label"} style={{ width: "45%", textAlign: "center", color: "#8FD14F", fontSize: 16 }}>{Object.keys(row)[0]}</Text>
                    
                     <TextBox key={idx+"input1"} placeHolder="" value={ String(Object.values(row))} style={{ width: "45%", color: "#8FD14F", fontSize: 16, textAlign:"right" }} readonly={false} /> 
                </View>})
            }</View>
    }
    

    render(): React.ReactNode {
        const subView = (
            <View key={"set_altitude_subview"} style={{ width: "100%", height: "100%",}}>
                <View style={{ width: "100%", height: "75%", flexDirection: "row", marginBottom:"5%" }}>
                    <View style={{ width: "50%", height: "100%" }}>
                        <View style={{ width: "100%", marginTop: "5%" }}>
                            <Text style={{ textAlign: "center", color: "#8FD14F", fontWeight: "400", fontSize: 20 }}>ALTITUDE</Text>
                        </View>
                        <View style={{ width: "70%", marginTop: "15%", borderBottomWidth: 2, borderColor: "#8FD14F", flexDirection: "row" }}>
                            <Text style={{ width: "100%", textAlign: "center", color: "#8FD14F", fontWeight: "800", fontSize: 40 }}>{this.state.altitude}</Text>
                            <Text style={{ fontSize: 20, color: "#8FD14F", paddingBottom: 10 }}>FT</Text>
                        </View>

                    </View>
                    <View style={{ width: "50%", height: "100%" }}>
                        <NumericPad eventHandler={this.handleNumericPadPress} limit={6} />
                    </View>

                </View>
                <View style={{ height: "10%", width: "100%" }}>
                    <Text style={{ textAlign:"center",color: "#8FD14F", fontWeight: "400", fontSize: 20, }}>PAX TOTAL :</Text>
                </View>
            </View>)
            
        const Altitude = <DialogBox key={"set_altitude"} header="SET JUMP ALTITUDE" 
                            messageType={MESSAGETYPE.INPUT} 
                            subView={[subView]} 
                            closeHandler={() => this.props.handleVisible(false)} 
                            okHandler={() => {
                                
                                    this.displayJumpType(true);
                            }} />

        
        const jumpTypeOption=<SelectOption key={"jump_option"} options={["HOLA","COMBAT"]} selectedOption={0} handleSelectedOption={this.setJumpType}/>
        const JumpTypeDialog =  <DialogBox key={"jump_option_dialog"} header="SET JUMP ALTITUDE" 
                messageType={MESSAGETYPE.INPUT} 
                subView={[jumpTypeOption]} 
                closeHandler={() => this.displayJumpType(false)} 
                okHandler={() => { 
                    this.setPassedAllTest(true)

                }} />
        return <View style={{width:"90%",height:"90%", alignContent:"center", justifyContent:"center"}}>
                {this.state.altitudeDialog &&Altitude}
                {this.state.jumpTypeDialog && JumpTypeDialog}
        </View>
    }

}