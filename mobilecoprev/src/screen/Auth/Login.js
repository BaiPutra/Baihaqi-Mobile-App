import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
Icon2.loadFont();
const myIcon1 = <Icon name="user" size={38} color="white" />;
const myIcon2 = <Icon2 name="key" size={35} color="white" />;

export default class Login extends React.Component {

    static navigationOptions = {
      headerShown: false,
    };

    state = {
        email: '',
        password: '',
    };

    _onHandlerRegistrasi = () => {
        this.props.navigation.navigate('Register');
    };
    _onHandlerTanpaLogin = () => {
        this.props.navigation.navigate('Main');
    };

    render() {
        return (
            <ImageBackground source={require('mobilecoprev/src/asset/BackgroundImage.png')} style={styles.image}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View style={{alignItems: 'center', paddingTop: 60}}>
                        <Text style={{fontWeight: 'bold', fontSize: 32, color: 'white'}}>LOGIN</Text>
                        <View style={{paddingTop: 10, width: 200, alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Silahkan mendaftar untuk</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>fitur yang lebih lengkap</Text>
                        </View>
                    </View>

                    <KeyboardAvoidingView
                        behavior={"position"}>

                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{paddingTop:20, paddingRight:15}}>
                                    {myIcon1}
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={val => this.setState({email: val})}
                                    value={this.state.email}
                                    autoCapitalize="none"
                                    placeholder='Nama'
                                >
                                </TextInput>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <View style={{paddingTop:20, paddingRight:9}}>
                                    {myIcon2}
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
                        </View>
                        <View style={{alignItems: 'flex-end', paddingTop: 25, paddingRight: 39}}>
                            <TouchableOpacity>
                                <Text style={{color:'white'}}>Lupa kata sandi?</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>

                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity onPress={()  => this._onHandlerTanpaLogin()}>
                            <View style={styles.button}>
                                <Text style={{fontSize: 27, fontWeight: 'bold', color: '#FB2222'}}>LOGIN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={()  => this._onHandlerRegistrasi()}>
                        <View style={{alignItems: 'center', paddingBottom: 40}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Tidak memiliki akun ?</Text>
                            <Text style={{fontSize: 27, fontWeight: 'bold', color: 'white'}}>REGISTER</Text>
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
