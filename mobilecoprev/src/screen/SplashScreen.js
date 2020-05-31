import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

const THREE_SECONDS = 2000;

export default class SplashScreen extends Component {
    async componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Auth');
        }, THREE_SECONDS);
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F11F20',
                }}>
                <Image
                    source={require('mobilecoprev/src/asset/AppLogo.png')}
                    style={{width: 302, height: 361}}
                />
            </View>
        );
    }
}
