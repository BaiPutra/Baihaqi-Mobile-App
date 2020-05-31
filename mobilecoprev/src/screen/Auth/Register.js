import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
Icon2.loadFont();
Icon3.loadFont();
Icon4.loadFont();
const myIcon1 = <Icon name="user" size={38} color="white" />;
const myIcon2 = <Icon name="phone" size={35} color="white" />;
const myIcon3 = <Icon3 name="email" size={35} color="white" />;
const myIcon4 = <Icon2 name="key" size={35} color="white" />;
const myIcon5 = <Icon4 name="location-on" size={35} color="white" />;

export default class Login extends React.Component {

    static navigationOptions = {
        headerShown: false,
    };

    state = {
        name: '',
        phone: '',
        email: '',
        password: '',
        location: '',
    };

    _onHandlerLogin = () => {
        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <ImageBackground source={require('mobilecoprev/src/asset/BackgroundImage.png')} style={styles.image}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View style={{alignItems: 'center', paddingTop: 50}}>
                        <Text style={{fontWeight: 'bold', fontSize: 32, color: 'white'}}>REGISTRASI</Text>
                        <View style={{paddingTop: 5, alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Silahkan masukkan data diri anda pada</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>tabel yang telah disediakan</Text>
                        </View>
                    </View>

                    <KeyboardAvoidingView
                        behavior={"position"}>

                        <View style={{alignItems: 'center', paddingTop: 20, paddingBottom: 40}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{paddingTop:20, paddingRight:15, paddingBottom: 11}}>
                                    {myIcon1}
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={val => this.setState({name: val})}
                                    value={this.state.name}
                                    autoCapitalize="none"
                                    placeholder='Nama'
                                >
                                </TextInput>
                            </View>

                            <View style={{flexDirection: 'row', paddingBottom: 11}}>
                                <View style={{paddingTop:20, paddingRight:9}}>
                                    {myIcon2}
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={val => this.setState({phone: val})}
                                    value={this.state.phone}
                                    autoCapitalize="none"
                                    placeholder='Nomor Telepon'
                                >
                                </TextInput>
                            </View>

                            <View style={{flexDirection: 'row', paddingBottom: 11}}>
                                <View style={{paddingTop:20, paddingRight:9}}>
                                    {myIcon3}
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={val => this.setState({email: val})}
                                    value={this.state.email}
                                    autoCapitalize="none"
                                    placeholder='Email'
                                >
                                </TextInput>
                            </View>

                            <View style={{flexDirection: 'row', paddingBottom: 11}}>
                                <View style={{paddingTop:20, paddingRight:9}}>
                                    {myIcon4}
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    onChangeText={val => this.setState({password: val})}
                                    value={this.state.password}
                                    autoCapitalize="none"
                                    placeholder='Password'
                                >
                                </TextInput>
                            </View>

                            <View style={{flexDirection: 'row', paddingBottom: 11}}>
                                <View style={{paddingTop:20, paddingRight:9}}>
                                    {myIcon4}
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    onChangeText={val => this.setState({password: val})}
                                    value={this.state.password}
                                    autoCapitalize="none"
                                    placeholder='Konfirmasi Password'
                                >
                                </TextInput>
                            </View>

                            <View style={{flexDirection: 'row', paddingBottom: 11}}>
                                <View style={{paddingTop:20, paddingRight:9}}>
                                    {myIcon5}
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={val => this.setState({location: val})}
                                    value={this.state.location}
                                    autoCapitalize="none"
                                    placeholder='Lokasi'
                                >
                                </TextInput>
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={{fontSize: 27, fontWeight: 'bold', color: '#FB2222'}}>REGISTRASI</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={()  => this._onHandlerLogin()}>
                        <View style={{alignItems: 'center', paddingBottom: 40}}>
                            <Text style={{fontWeight: 'bold', color: 'white'}}>Sudah memiliki akun ?</Text>
                            <Text style={{color: 'white'}}>Log In disini</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "contain",
        // justifyContent: "center",
    },
    button: {
        borderRadius: 93,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 56,
        width: 294,
        marginBottom: 40,
    },
    textInput: {
        width: '66%',
        borderBottomWidth: 1,
        borderColor: 'white',
    },
});
