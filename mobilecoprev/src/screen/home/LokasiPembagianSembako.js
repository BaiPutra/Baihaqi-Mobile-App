import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {SearchBar} from "react-native-elements";

export default class App extends React.Component {
    option = this.props.navigation.getParam('option');
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: false
    };

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View>
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
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                            latitude: -6.3114209,
                            longitude: 106.647351,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}>
                        <MapView.Marker
                            coordinate={{
                                latitude: -6.3114209,
                                longitude: 106.647351,
                            }}
                            title='My Location'
                            description='Here I am.'
                        />
                        <Image source={require('mobilecoprev/src/asset/LocationSembako.png')} style={styles.location}/>
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#FA2222',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    searchbar: {
        backgroundColor: '#FA2222',
    },
    containersearch: {
        backgroundColor:'white',
        height: 25,
        width: '85%',
        borderRadius: 20,
        marginLeft: 30,
    },
    container: {
        height: 610,
        width: 400,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        paddingBottom: 40,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    location: {
        width: '90%',
        height: 80,
    }
});
