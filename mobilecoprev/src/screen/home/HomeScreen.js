import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    state = {
        search: '',
        is_semua: true,
        is_tips: false,
        is_pencehagan: false,
    };

    handlePencegahan = () => {
        this.setState({
            is_pencehagan: true,
            is_tips: false,
            is_semua: false,
        });
    };

    handleSemua = () => {
        this.setState({
            is_pencehagan: false,
            is_tips: false,
            is_semua: true,
        });
    };

    handleTips = () => {
        this.setState({
            is_pencehagan: false,
            is_tips: true,
            is_semua: false,
        });
    };

    static navigationOptions = {
        headerShown: false,
    };

    _onHandlerPeriksaCovid(item) {
        this.props.navigation.navigate('Periksa');
    };
    _onHandlerInfoTerkini = () => {
        this.props.navigation.navigate('Info');
    };
    _onHandlerUpdateCovid = () => {
        this.props.navigation.navigate('Update');
    };
    _onHandlerLokasiPembagianSembako = () => {
        this.props.navigation.navigate('Lokasi');
    };
    _onHandlerLokasiPoskoTest = () => {
        this.props.navigation.navigate('Posko');
    };
    _onHandlerTipsSatu = () => {
        this.props.navigation.navigate('Tips');
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <Text style={styles.textLogo}>CO-PREV</Text>
                    <SearchBar
                        containerStyle={styles.searchbar}
                        inputContainerStyle={styles.containersearch}
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={search}
                        platform={'ios'}
                    />
                </View>
                <View style={styles.container1}>
                    <ScrollView th>
                        <View>
                            <View style={{height: 61, justifyContent:'center', paddingLeft: 24}}>
                                <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                                    Info Terkini
                                </Text>
                            </View>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={()  => this._onHandlerInfoTerkini()}>
                                    <ImageBackground source={require('mobilecoprev/src/asset/Info1.png')} style={styles.image}>
                                        <View style={styles.info}>
                                            <Text style={{color: 'white', fontWeight: 'bold'}}>Wabah Virus Corona Covid-19 Jadi Bencana Nasional, Apa Artinya?</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()  => this._onHandlerInfoTerkini()}>
                                    <ImageBackground source={require('mobilecoprev/src/asset/Info2.png')} style={styles.image}>
                                        <View style={styles.info}>
                                            <Text style={{color: 'white', fontWeight: 'bold'}}>Upadate Terkini: Jumlah Kasus Covid-19 di Indonesia Kini 4,557</Text>
                                            <Text style={{color: '#FA2222', fontWeight: 'bold'}}>Ikuti Perkembangannya di Sini > </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()  => this._onHandlerInfoTerkini()}>
                                    <ImageBackground source={require('mobilecoprev/src/asset/Info3.png')} style={styles.image}>
                                        <View style={styles.info}>
                                            <Text style={{color: 'white', fontWeight: 'bold'}}>Kabar Baik, WHO Sebut Tiga Vaksin Covid-19 Telah Diuji Pada Manusia</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View style = {{height: 600}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30}}>
                                <TouchableOpacity onPress={()  => this._onHandlerPeriksaCovid()}>
                                    <View style={styles.containermenu}>
                                        <View style={styles.textmenu}>
                                            <Text style={{fontWeight: 'bold'}}>Periksa COVID-19</Text>
                                        </View>
                                        <Image source={require('mobilecoprev/src/asset/Menu1.png')} style={styles.menuicon}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()  => this._onHandlerUpdateCovid()}>
                                    <View style={styles.containermenu}>
                                        <Image source={require('mobilecoprev/src/asset/Menu2.png')} style={styles.menuicon}/>
                                        <View style={styles.textmenu}>
                                            <Text style={{fontWeight: 'bold'}}>Update COVID-19</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menubox}>
                                <TouchableOpacity onPress={()  => this._onHandlerLokasiPembagianSembako()}>
                                    <View style={styles.containermenu}>
                                        <View style={styles.textmenu}>
                                            <Text style={{fontWeight: 'bold'}}>Lokasi Pembagian Sembako</Text>
                                        </View>
                                        <Image source={require('mobilecoprev/src/asset/Menu3.png')} style={styles.menuicon}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()  => this._onHandlerLokasiPoskoTest()}>
                                    <View style={styles.containermenu}>
                                        <Image source={require('mobilecoprev/src/asset/Menu4.png')} style={styles.menuicon}/>
                                        <View style={styles.textmenu}>
                                            <Text style={{fontWeight: 'bold'}}>Posko Test COVID-19</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menubox}>
                                <TouchableOpacity>
                                    <View style={styles.containermenu}>
                                        <View style={styles.textmenu}>
                                            <Text style={{fontWeight: 'bold'}}>Rumah Sakit Rujukan COVID-19</Text>
                                        </View>
                                        <Image source={require('mobilecoprev/src/asset/Menu5.png')} style={styles.menuicon}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.containermenu}>
                                        <Image source={require('mobilecoprev/src/asset/Menu6.png')} style={styles.menuicon}/>
                                        <View style={styles.textmenu}>
                                            <Text style={{fontWeight: 'bold'}}>Peta Persebaran COVID-19</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menubox}>
                                <TouchableOpacity>
                                    <View style={styles.containermenu}>
                                        <View style={styles.textmenu}>
                                            <Text style={{fontWeight: 'bold'}}>Laporan Pasien COVID-19</Text>
                                        </View>
                                        <Image source={require('mobilecoprev/src/asset/Menu7.png')} style={styles.menuicon}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.containermenu}>
                                        <Image source={require('mobilecoprev/src/asset/Menu8.png')} style={styles.menuicon}/>
                                        <View style={styles.textmenu}>
                                            <Text style={{fontWeight: 'bold'}}>Deteksi Lingkungan Dini</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', height: 60, backgroundColor: '#FA2222', alignItems: 'flex-start'}}>
                            <TouchableOpacity
                                style={[
                                    styles.loginButton,
                                    {
                                        backgroundColor: this.state.is_semua ? 'white' : '#FA2222',
                                    },
                                ]}
                                onPress={this.handleSemua}>
                                <Text
                                    style={{
                                        color: this.state.is_semua ? '#FA2222' : 'white',
                                        fontWeight: this.state.is_semua ? 'bold' : '100',
                                        fontSize: 19,
                                    }}>
                                    Semua
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.loginButton,
                                    {
                                        backgroundColor: this.state.is_tips
                                            ? 'white'
                                            : '#FA2222',
                                    },
                                ]}
                                onPress={this.handleTips}>
                                <Text
                                    style={{
                                        color: this.state.is_tips ? '#FA2222' : 'white',
                                        fontWeight: this.state.is_tips ? 'bold' : '100',
                                        fontSize: 19,
                                    }}>
                                    Tips
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.loginButton,
                                    {
                                        backgroundColor: this.state.is_pencehagan ? 'white' : '#FA2222',
                                    },
                                ]}
                                onPress={this.handlePencegahan}>
                                <Text
                                    style={{
                                        color: this.state.is_pencehagan ? '#FA2222' : 'white',
                                        fontWeight: this.state.is_pencehagan ? 'bold' : '100',
                                        fontSize: 19,
                                    }}>
                                    Pencegahan
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={()  => this._onHandlerTipsSatu()}>
                            <View style={styles.tipsbox}>
                                <Image source={require('mobilecoprev/src/asset/Tips1.png')}/>
                                <View style={{paddingLeft: 15, width: 250}}>
                                    <View style={{height: 22, width: 75, borderRadius: 16, backgroundColor: '#FA2222', alignItems: 'center'}}>
                                        <Text style={{color: 'white', fontSize: 16}}>TIPS</Text>
                                    </View>
                                    <Text style={{fontSize: 20}}>Tips agar Anak Tidak Bosan di Rumah Selama Pandemi Covid-19</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()  => this._onHandlerTipsSatu()}>
                            <View style={styles.tipsbox}>
                                <Image source={require('mobilecoprev/src/asset/Tips2.png')}/>
                                <View style={{paddingLeft: 15, width: 250}}>
                                    <View style={{height: 22, width: 130, borderRadius: 16, backgroundColor: '#FA2222', alignItems: 'center'}}>
                                        <Text style={{color: 'white', fontSize: 16}}>PENCEGAHAN</Text>
                                    </View>
                                    <Text style={{fontSize: 20}}>9 Upaya Pencegahan Penularan Covid-19</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.header}>
                            <Text style={styles.textLogo}>CO-PREV</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 115,
        backgroundColor: '#FA2222',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    info: {
        width: 270,
        height: '100%',
        justifyContent: 'flex-end',
        padding: 20
    },
    container1: {
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        height: 230,
        width: 415
        // justifyContent: "center",
    },
    searchbar: {
        backgroundColor: '#FA2222',
    },
    containersearch: {
        backgroundColor:'white',
        height: 30,
        width: '90%',
        borderRadius: 20,
        marginLeft: 20,
    },
    containermenu: {
        height: 120,
        width: 195,
        borderRadius: 10,
        borderWidth: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuicon: {
        height: 60,
        width: 60
    },
    textmenu: {
        width: 100,
        padding: 10,
    },
    menubox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20
    },
    loginButton: {
        marginTop: 10,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        height: 33,
        width: 120,
        borderWidth: 2,
        borderColor: 'white'
    },
    tipsbox: {
        height: 150,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        paddingLeft: 20
    }
});
