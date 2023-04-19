import React from "react";
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { COLORS } from "../utils/theme";


export const Header = ({title}) => {
    return (

            <View style={styles.headerView}>
                <Text style={styles.title}>{title}</Text>
            </View>

    )
}


const styles = StyleSheet.create({
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: COLORS.border,
        marginBottom: 10
        // backgroundColor : 'red',
        // height: '20%'
        // width: '100%'
    },
    title : {
        fontSize: 25,
        fontWeight: '700',
        color: COLORS.primary
    }
})
