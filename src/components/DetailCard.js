import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../utils/theme";


export const DetailCard = ({data}) => {
    console.log(data)
    return (
        <View style={styles.container}>
            {data.error ?
            <Text>{data.error}</Text>
            :
            <>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{data.activity}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                <Text style={{ fontSize: 14, }}>Participants: {data.participants}</Text>
                <Text style={{ fontSize: 14, }}>Price: {data.price}</Text>
                <Text style={{ fontSize: 14, }}>Key: {data.key}</Text>
            </View>
            </>
                }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // width: '9%',
        width: '100%',
        padding: 20,
        // height: '40%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignSelf: 'center',
        zIndex: -10
    }
})
