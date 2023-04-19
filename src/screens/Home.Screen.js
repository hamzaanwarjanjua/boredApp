import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Header, RNIcon, ListHeader,DetailCard } from "../components";

const BASE_URL = 'https://www.boredapi.com/api/activity'

export const Home = () => {
    const [detail, setDetail] = useState({})
    const fetchActivity =async (data) => {
        console.log(data)
        let url = BASE_URL
        if(data?.searchBy) {
            if(data.searchBy === 'priceRange'){
                url = `${url}?minprice=${data.minValue}&maxprice=${data.maxValue}`
            } else if(data.searchBy === 'accessibilityRange') {
                url = `${url}?minaccessibility=${data.minValue}&maxaccessibility=${data.maxValue}`
            } else {
                url = `${url}?${data?.searchBy}=${data?.singalValue}`
            }
        }
        const res = await fetch(url, {
            method: "GET",
            'accept-type' : "application/json"
        })
        const jsonData = await  res.json();

        setDetail(jsonData)
        if(jsonData.error) {
            Alert.alert('Invalid Value')
        }
        console.log("🚀 ~ file: Home.Screen.js:13 ~ fetchActivity ~ jsonData:", jsonData)

    }
    useEffect(() => {
        fetchActivity()
    },[])

    return (
        <View style={styles.container}>
            <Header title={"Bored App"} />
            <ListHeader onPressHandler={(data) => {
                fetchActivity(data)
            }} />
            <DetailCard data={detail} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor: 'yellow'
    }
})
