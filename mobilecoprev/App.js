import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont()

import SplashScreen from "./src/screen/SplashScreen";
import HomeScreen from './src/screen/home/HomeScreen';
import UserScreen from './src/screen/Profile/UserScreen';
import LoginScreen from './src/screen/Auth/Login';
import RegisterScreen from './src/screen/Auth/Register';
import PeriksaCovid from "./src/screen/home/PeriksaCovid";
import InfoTerkini from "./src/screen/home/InfoTerkini";
import UpdateCovid from "./src/screen/home/UpdateCovid";
import LokasiPembagianSembako from "./src/screen/home/LokasiPembagianSembako";
import PoskoTest from "./src/screen/home/PoskoTest";
import TipsSatu from "./src/screen/home/TipsSatu";

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
});

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Periksa: PeriksaCovid,
    Info: InfoTerkini,
    Update: UpdateCovid,
    Lokasi: LokasiPembagianSembako,
    Posko: PoskoTest,
    Tips: TipsSatu,
});

const ProfileStack = createStackNavigator({
    User: UserScreen,
});

const MainStack = createBottomTabNavigator({
    Home: HomeStack,
    Profile: ProfileStack,
},
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName = null;

                if (routeName === 'Home') {
                    iconName = `home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Profile') {
                    iconName = `account${focused ? '' : '-outline'}`;
                }
                return <Icon name={iconName} size={24} color={tintColor}/>;
                },
        }),
        tabBarComponent: BottomTabBar,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#FA2222',
            inactiveTintColor: '#aaa',
            showLabel: true,
            style: {
                elevation: 4,
            },
        },
    },
    );

const AppStack = createAppContainer(
    createSwitchNavigator({
        Splash: SplashScreen,
        Main: MainStack,
        Auth: AuthStack,
    },
        {
            initialRouteName:'Splash',
        }
    ),
);

export default AppStack;
