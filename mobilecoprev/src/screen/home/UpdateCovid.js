import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView,} from "react-native";

export default class App extends React.Component {

    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor:'white'}}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Update COVID-19</Text>
                </View>
                <ScrollView scrollEventThrottle={16}>
                    <View style={styles.title}>
                        <Text style={styles.titletext}>Info Terupdate COVID-19 </Text>
                        <Text style={styles.titletext}>- 12 April 2020 | Pukul 18.00 -</Text>
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}> ( INDONESIA )</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.info}>
                            <View style={styles.infobox}>
                                <Text style={styles.infotext}>Total Kasus</Text>
                            </View>
                            <Text style={styles.infotext}>3,842</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.infobox}>
                                <Text style={styles.infotext}>Dirawat</Text>
                            </View>
                            <Text style={styles.infotext}>3,229</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.infobox}>
                                <Text style={styles.infotext}>Sembuh</Text>
                            </View>
                            <Text style={styles.infotext}>286</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.infobox}>
                                <Text style={styles.infotext}>Meninggal</Text>
                            </View>
                            <Text style={styles.infotext}>327</Text>
                        </View>
                    </ScrollView>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{height: 90, justifyContent: 'center'}}>
                            <Text style={{fontSize: 39, fontWeight: 'bold'}}>HARI INI</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.infobox2}>
                                <Text style={{fontSize: 24}}>Total Kasus</Text>
                                <View style={{flexDirection: 'row', paddingTop: 5}}>
                                    <Text style={{fontSize: 24}}>+ 200</Text>
                                    <Image source={require('mobilecoprev/src/asset/StatisticUp.png')} style={styles.imagestatistic}/>
                                </View>
                            </View>
                            <View style={styles.infobox2}>
                                <Text style={{fontSize: 24}}>Dirawat</Text>
                                <View style={{flexDirection: 'row', paddingTop: 5}}>
                                    <Text style={{fontSize: 24}}>+ 130</Text>
                                    <Image source={require('mobilecoprev/src/asset/StatisticUp.png')} style={styles.imagestatistic}/>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.infobox2}>
                                <Text style={{fontSize: 24}}>Sembuh</Text>
                                <View style={{flexDirection: 'row', paddingTop: 5}}>
                                    <Text style={{fontSize: 24}}>+ 45</Text>
                                    <Image source={require('mobilecoprev/src/asset/StatisticUp.png')} style={styles.imagestatistic}/>
                                </View>
                            </View>
                            <View style={styles.infobox2}>
                                <Text style={{fontSize: 24}}>Meninggal</Text>
                                <View style={{flexDirection: 'row', paddingTop: 5}}>
                                    <Text style={{fontSize: 24}}>+ 12</Text>
                                    <Image source={require('mobilecoprev/src/asset/StatisticUp.png')} style={styles.imagestatistic}/>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.title}>
                        <Text style={styles.titletext}>Info Terupdate COVID-19 </Text>
                        <Text style={styles.titletext}>- 12 April 2020 | Pukul 18.00 -</Text>
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}> ( DUNIA )</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.info}>
                            <View style={styles.infobox}>
                                <Text style={styles.infotext}>Total Kasus</Text>
                            </View>
                            <Text style={styles.infotext}>1,684,833</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.infobox}>
                                <Text style={styles.infotext}>Dirawat</Text>
                            </View>
                            <Text style={styles.infotext}>1,283,622</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.infobox}>
                                <Text style={styles.infotext}>Sembuh</Text>
                            </View>
                            <Text style={styles.infotext}>404,218</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.infobox}>
                                <Text style={styles.infotext}>Meninggal</Text>
                            </View>
                            <Text style={styles.infotext}>109,705</Text>
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#F11F20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headertext: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    title: {
        flex: 1,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titletext: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
    info: {
        backgroundColor: '#F25625',
        height: 95,
        width: 180,
        alignItems: 'center',
        borderRadius: 7,
        marginHorizontal: 8
    },
    infobox: {
        backgroundColor: '#053275',
        height: 50,
        width: '100%',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    infobox2: {
        height: 100,
        width: 175,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10

    },
    infotext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    },
    imagestatistic: {
        height: 33,
        width: 49
    }
});

