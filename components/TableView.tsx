import { useEffect, useState } from "react";
import { GestureResponderEvent, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const TableView = (props: { rows: Array<Array<string>>, refresh: boolean,loaded:(toggle:boolean)=>void }) => {
    const [data, setData] = useState(props.rows);

    const Cell = (props: { data: string }) => {
        return <Text style={styles.cellText}>{props.data}</Text>
    }
    const Column = (props: { cell: string }) => {
        return <Cell data={props.cell} />
    }
    const Row = (props: { index: number, columns: Array<string>,onPress:(idx:number)=>void }) => {
        return (<TouchableOpacity style={styles.row} onPress={(event: GestureResponderEvent) => {
            props.onPress(props.index);
        }}>
            {props.columns.map((cell: string, idx: number) => {
                return <Column key={idx} cell={cell} />

            })}
            <Image source={require("../assets/rfsignal.png")} style={{ width: "5%", height: "100%", alignSelf: "stretch" }} />
        </TouchableOpacity>);

    }

    const selectRow=(idx:number)=>{
        setData(data.map((item,index)=>{
            if(index==idx){
                item[item.length-1]="0"?"1":"0";
            }
            return item;
        }))
        console.log(data);
       
    };

    useEffect(() => {
        if(!props.refresh)
            setData(data.map((row) => {row.push("0");  console.log(row); return row }));
    }, [props.refresh])

    const table= (
        <ScrollView style={styles.table}>
            {props.rows.map((data: Array<string>, idx: number) => {
                return <Row key={idx} index={idx} columns={data} onPress={selectRow}></Row>
            })}
        </ScrollView>

    )
    props.loaded(false);
    return table;

}
const styles = StyleSheet.create({
    cell: {

    },
    cellText: {
        color: "#8FD14F",
        fontSize: 15,

    },
    row: {
        borderBottomWidth: 3,
        borderColor: "#8FD14F",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-around"



    },
    table: {
        backgroundColor: "#000",
        flex: 1,
        width: "100%",
        padding: "2%"
    },

})