import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { COLORS } from "../utils/theme";
import { RNIcon } from "./Icon";
export const ListHeader = ({onPressHandler}) => {


    const [inputValue, setInputValue] = useState('');
    const [minValue, setMinValue] = useState('')
    const [maxValue, setMaxValue] = useState('')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Key', value: 'key'},
        {label: 'Type', value: 'type'},
        {label: 'Participants', value: 'participants'},
        {label: 'Price', value: 'price'},
        {label: 'Price Range', value: 'priceRange'},
        {label: 'Accessibility', value: 'accessibility'},
        {label: 'Accessibility Range', value: 'accessibilityRange'},
      ]);
    return (
        <View>
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      zIndex={100}
      style={{
        borderColor: COLORS.border
      }}
      listMode={Platform.select({
        android: "MODAL",
      })}
      />
        <View style={styles.container}>
    <View style={{ width: '82%', }}>
        {
            value === 'accessibilityRange' || value === 'priceRange' ?
            <View style={{ flexDirection: 'row', zIndex: -10 }}>

            <TextInput
            style={{...styles.input, flex: 1, marginRight: 5}}
            placeholderTextColor={'#000'}
            placeholder="Min Value"
            onChangeText={(text) => setMinValue(text)}
            value={minValue}
            />
            <TextInput
            style={{...styles.input, flex: 1}}
            placeholderTextColor={'#000'}
            placeholder="Max Value"
            value={maxValue}
            onChangeText={(text) => setMaxValue(text)}
            />
            </View>
            :
            <TextInput
            style={styles.input}
            placeholderTextColor={'#000'}
            placeholder="Enter Value"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            />
        }
    </View>
    <TouchableOpacity style={styles.button}
    onPress={() => onPressHandler({ searchBy: value, singalValue: inputValue, minValue, maxValue })}
    >
        <RNIcon Iconname="Feather" name="search" size={35} color="#fff" />
    </TouchableOpacity>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        zIndex: -20

    },
    button:{ backgroundColor: COLORS.primary, width : 60, height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
    input: {
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.border,
        paddingHorizontal: 10,
    }
})
