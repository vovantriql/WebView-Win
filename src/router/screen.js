import {
    createStackNavigator, createBottomTabNavigator,
    createDrawerNavigator, createSwitchNavigator
} from 'react-navigation';
import {
    Easing, Animated
} from 'react-native';

import RootScreen from './RootScreen';
import React, { Component } from 'react';
import Test from '../screen/Test'
import BrowserInApp from '../component/BrowserInApp';


const SideMainDrawer = createDrawerNavigator({
    sc_Home: {
        screen: Test,
        navigationOptions: {
            header: null
        }
    },
   
},
    {
        drawerPosition: 'left',
        disableGestures: true,
        unmountInactiveRoutes: true
    }
);







/**
 * Router Gốc không thay đổi.
*/

const RootStack = createStackNavigator(
    {
        sc_Root: {
            screen: RootScreen,
            navigationOptions: {
                header: null
            }
        },
        sc_SideMain: {
            screen: SideMainDrawer,
            path: 'drawer',
            navigationOptions: {
                header: null,
                animationEnabled: true
            }
        },


    },
    {
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);


// - Modal native -- Các screen dạng modal, popup khai báo ở đây

const RootModalStack = createStackNavigator(
    {
        Root: {
            screen: RootStack,
            path: 'root'
        },
        //-- Khai bao modal khong co Animations o day
        // -- Screen Modal, Popup
        sc_BrowserInApp: BrowserInApp,
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transitionConfig: () => ({
            containerStyle: {
                backgroundColor: 'transparent'
            }
        }),
        transparentCard: true,
        cardStyle: {
            backgroundColor: 'transparent',
            opacity: 1
        }
    }
);







export const AppStack = createStackNavigator({
    RootMain: {
        screen: RootModalStack,
        path: 'app'
    },
    //-- Khai bao modal khong co Animations o day

},
    {
        mode: 'modal',
        headerMode: 'none',
        transitionConfig: () => ({
            containerStyle: {
                backgroundColor: 'transparent'
            },
            transitionSpec: {
                duration: 0,
                timing: Animated.timing,
                easing: Easing.step0,
            }
        }),
        transparentCard: true,
        cardStyle: {
            backgroundColor: 'transparent',
            opacity: 1
        }
    });