import React from "react";
import {
    useEffect,
    useState
} from "react";
import {
    GestureResponderEvent,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";

interface TableViewProps {
    data: Array<Array<string>>,
    refresh: boolean,
    loaded: (toggle: boolean) => void,
    signalSwitchArray: Array<boolean>
}
interface TableViewState {
    rowsData: Array<Array<string>>,
    showSignalList: Array<boolean>,
    selectedList: Array<boolean>
}
export class TableView extends React.Component<TableViewProps, TableViewState> {

    constructor(props: TableViewProps) {
        super(props)
        this.state = {
            rowsData: props.data,
            showSignalList: this.props.signalSwitchArray,
            selectedList: Array<boolean>(props.data.length).fill(false)
        }
        this.selectRow = this.selectRow.bind(this)
        this.showRowSignal = this.showRowSignal.bind(this)


    }

    selectRow(rowIndex: number) {
        this.setState({
            selectedList: this.state.selectedList.map((item, index) => {
                if (index == rowIndex)
                    return !item;
                return item;
            })
        })
    }
    showRowSignal(rowIndex: number,) {
        this.setState({
            showSignalList: this.state.showSignalList.map((item, index) => {
                if (index == rowIndex)
                    return !item;
                return item;
            })
        })
    }



    render(): React.ReactNode {
        const Cell = (props: { data: string }) => {
            return <Text style={styles.cellText}>{props.data}</Text>
        }

        const Column = (props: { cell: string }) => {
            return <Cell data={props.cell} />

        }
        const Row = (props: { index: number, columns: Array<string>, onPress: (idx: number) => void, selected: boolean, showSignal: boolean }) => {
            return (
                <TouchableOpacity style={props.selected ? styles.rowHighLighted : styles.row} onPress={() => {
                    props.onPress(props.index);
                }}>
                    {props.columns.map((cell: string, idx: number) => {
                        return <Column key={idx} cell={cell} />
                    })}
                    {props.showSignal && <Image key={props.columns.map.length} source={require("../assets/rfsignal.png")} style={{ width: 20, height:20, borderRadius:10, marginTop:5}} />}
                    {!props.showSignal && <Column key={props.columns.map.length} cell={"\t"} />}
                </TouchableOpacity>
            );
        }

        const Heading = (props: { heading: Array<string> }) => {
            return (<View key={"hearder"} style={{ width: "100%", height: 40, backgroundColor: "#8FD14F", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                {props.heading.map((cell: string, idx: number) => {
                    return <Text key={idx} style={{ fontSize: 16, fontWeight: "bold" }}>  [{cell}]  </Text>

                })}
            </View>);

        }

        const table = (
            <ScrollView style={styles.table}>
                {this.state.rowsData.map((data: Array<string>, idx: number) => {
                    if (idx === 0) {
                        return <Heading key={0} heading={data} />
                    }
                    return <Row key={idx} index={idx} columns={data} onPress={this.selectRow} selected={this.state.selectedList[idx]} showSignal={Boolean(this.state.showSignalList[idx - 1])} />
                })}
            </ScrollView>

        )
        this.props.loaded(true);
        return table;
    }


}
const styles = StyleSheet.create({
    cell: {

    },
    cellText: {
        color: "#8FD14F",
        fontSize: 15,
        fontWeight: "500"
    },
    row: {
        borderBottomWidth: 3,
        borderColor: "#8FD14F",
        marginTop: 10,
        flexDirection: "row",
        height: 30,
        justifyContent: "space-around"



    },
    rowHighLighted: {
        borderBottomWidth: 3,
        backgroundColor: "#0CA789",
        borderColor: "#8FD14F",
        marginTop: 10,
        height: 30,
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