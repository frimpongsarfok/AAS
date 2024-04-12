import React from "react";
import { View, Text } from "react-native";
import { SelectableButton } from "./Buttons"


interface SelectOptionProps {
    options: Array<string>
    selectedOption?: number
    handleSelectedOption: (seleted: number) => void
}

interface SelectOptionState {
    selectedOption: number
}
export class SelectOption extends React.Component<SelectOptionProps, SelectOptionState>{

    constructor(props: SelectOptionProps) {
        super(props)
        this.state = {
            selectedOption: props.selectedOption?props.selectedOption:0,
        }
    }
    render(): React.ReactNode {
        return <View key={1} style={{ width: "100%", height: "100%", justifyContent:"center", alignContent:"center" }}>
            {this.props.options.map((title: string, idx: number) => {
                return <View key={idx} style={{ width: "100%", height: "40%", marginBottom: 10 }}>
                    <SelectableButton
                        value={title}
                        selected={this.state.selectedOption === idx}
                        disabled={false}
                        onPress={() => {
                            this.props.handleSelectedOption(idx)
                            this.setState({ selectedOption: idx })
                        }} />
                </View>
            })}
        </View>

    }
}