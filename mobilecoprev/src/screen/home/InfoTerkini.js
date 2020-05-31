import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <ImageBackground source={require('mobilecoprev/src/asset/Info2.png')} style={styles.image}>
                </ImageBackground>
                <View style={{width: 370, padding: 20}}>
                    <Text style={styles.header}>Update Terkini : Jumlah Kasus Covid-19 di Indonesia Kini 4,577</Text>
                </View>
                <View style={{width: 400, padding: 20}}>
                    <Text style={styles.text}>Penularan Covid-19 yang disebabkan virus corona masih terjadi di masyarakat. Hal ini terlihat berdasarkan update kasus yang diumumkan pemerintah.</Text>
                    <Text style={styles.text}>Berdasarkan data yang masuk hingga Senin (13/4/2020) pukul 12.00 WIB diketahui secara total ada 4.557 kasus Covid-19 di Tanah Air.</Text>
                    <Text style={styles.text}>Dengan demikian, ada penambahan 316 kasus baru Covid-19 dalam 24 jam terakhir.</Text>
                    <Text style={styles.text}>Hal ini diungkapkan juru bicara pemerintah untuk penanganan virus corona <Text style={styles.bluetext}>Achmad Yurianto</Text> dalam konferensi pers di Graha BNPB pada Senin sore. </Text>
                    <Text style={styles.text}>"Kasus konfirmasi positif sebanyak 316 orang, sehingga total 4.557 orang," ujar Achmad Yurianto.</Text>
                    <Text style={styles.text}>Yuri juga menjelaskan, dalam periode yang sama ada penambahan 21 pasien Covid-19 yang dinyatakan sembuh. </Text>
                    <Text style={styles.text}>Dengan demikian, totalnya ada 380 pasien yang sudah dinyatakan negatif virus corona setelah menjalani dua kali pemeriksaan. </Text>
                    <Text style={styles.text}>Pemerintah, menurut Yuri, optimistis bahwa jumlah pasien Covid-19 yang sembuh akan terus bertambah. </Text>
                    <Text style={styles.text}>Dengan demikian, pemerintah juga berharap masyarakat ikut menjaga optimisme tersebut. </Text>
                    <Text style={styles.text}>"Ini optimisme bersama bahwa Covid-19 bisa sembuh, dan jumlah yang sembuh akan terus bertambah dari waktu ke waktu," kata dia. </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 265,
        width: 415
    },
    header: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    text: {
        fontSize: 16
    },
    bluetext: {
        fontWeight: 'bold',
        color: '#0782F4'
    }
});

