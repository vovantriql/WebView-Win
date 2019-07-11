
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert,  StyleSheet } from 'react-native';
import Utils from '../app/Utils'

class RootScreen extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            Utils.goscreen(this,'sc_Home')
        }, 600);
    }

    render() {
        return (
             <View style={{ flex: 1, backgroundColor: '#70B2DF', justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="#193850" style={{ position: 'absolute'}} />
                    <Text  style={styles.text}>
                        Welcome to WinERP!
                    </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20
    }
});

export default RootScreen;