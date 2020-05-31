import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TextInput} from "react-native";
import {SearchBar} from "react-native-elements";

export default class App extends React.Component {

    state = {
        search: '',
    };

    static navigationOptions = {
        headerShown: false,
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={{flex: 1, backgroundColor:'white'}}>
                <View style={styles.header}>
                    <View style={{paddingBottom: 20}}>
                        <Text style={styles.title}>Periksa COVID 19</Text>
                    </View>
                    <View style={styles.usercontainer}>
                        <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.image}/>
                        <Text style={styles.user}>Kementrian Kesehatan RI</Text>
                    </View>
                </View>
                <ScrollView style={styles.container}>
                    <View style={{height: 90, justifyContent: 'center'}}>
                        <View style={styles.chatbox}>
                            <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.chatimage}/>
                            <View style={styles.textbox}>
                                <Text style={{fontWeight:'bold'}}>Apakah kamu mengalami demam 14 hari terakhir?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingEnd: 20}}>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Ya</Text>
                            </View>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 90, justifyContent: 'center'}}>
                        <View style={styles.chatbox}>
                            <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.chatimage}/>
                            <View style={styles.textbox}>
                                <Text style={{fontWeight:'bold'}}>Adakah gejala batuk, pilek atau nyeri tenggorokan?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingEnd: 20}}>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Ya</Text>
                            </View>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 90, justifyContent: 'center'}}>
                        <View style={styles.chatbox}>
                            <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.chatimage}/>
                            <View style={styles.textbox2}>
                                <Text style={{fontWeight:'bold'}}>Apakah nafas kamu terasa sesak atau dada terasa berat?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingEnd: 20}}>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Ya</Text>
                            </View>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 90, justifyContent: 'center'}}>
                        <View style={styles.chatbox}>
                            <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.chatimage}/>
                            <View style={styles.textbox2}>
                                <Text style={{fontWeight:'bold'}}>Pernah berada dalam satu ruangan dengan pasien postif COVID-19?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingEnd: 20}}>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Ya</Text>
                            </View>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 90, justifyContent: 'center'}}>
                        <View style={styles.chatbox}>
                            <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.chatimage}/>
                            <View style={styles.textbox}>
                                <Text style={{fontWeight:'bold'}}>Apakah kamu mengalami demam 14 hari terakhir?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingEnd: 20}}>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Ya</Text>
                            </View>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 90, justifyContent: 'center'}}>
                        <View style={styles.chatbox}>
                            <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.chatimage}/>
                            <View style={styles.textbox}>
                                <Text style={{fontWeight:'bold'}}>Apakah kamu mengalami demam 14 hari terakhir?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingEnd: 20}}>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Ya</Text>
                            </View>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak</Text>
                            </View>
                            <View style={styles.yesbox2}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak Tahu</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 90, justifyContent: 'center'}}>
                        <View style={styles.chatbox}>
                            <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.chatimage}/>
                            <View style={styles.textbox}>
                                <Text style={{fontWeight:'bold'}}>Apakah kamu mengalami demam 14 hari terakhir?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingEnd: 20}}>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Ya</Text>
                            </View>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 90, justifyContent: 'center'}}>
                        <View style={styles.chatbox}>
                            <Image source={require('mobilecoprev/src/asset/LogoKemenkes.png')} style={styles.chatimage}/>
                            <View style={styles.textbox}>
                                <Text style={{fontWeight:'bold'}}>Apakah kamu mengalami demam 14 hari terakhir?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingEnd: 20}}>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Ya</Text>
                            </View>
                            <View style={styles.yesbox}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Tidak</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TextInput
                    containerStyle={styles.searchbar}
                    inputContainerStyle={styles.containersearch}
                    placeholder="Pesan baru ..."
                    onChangeText={this.updateSearch}
                    value={search}
                    platform={'ios'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 150,
        backgroundColor: '#F11F20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    usercontainer: {
        height: 60,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    user: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: 40,
        width: 43
    },
    chatimage: {
        height: 28,
        width: 29
    },
    chatbox: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textbox: {
        height: 35,
        width: 345,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10
    },
    textbox2: {
        height: 55,
        width: 345,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10
    },
    yesbox: {
        height: 25,
        width: 55,
        backgroundColor: '#797979',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 5
    },
    yesbox2: {
        height: 25,
        width: 75,
        backgroundColor: '#797979',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 5
    }
});

