
import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Alert,TextInput, StyleSheet,ImageBackground,Image } from "react-native";
import { nstyles } from '../styles/styles'
import Utils from '../app/Utils';
import { Images } from '../images';


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link:''
        }
    }
    _gotoWeb = () => {
        Utils.goscreen(this, 'sc_BrowserInApp', 
        { link:'http://' + this.state.link  , istitle: true, title: 'WinERP' }
        )
    }
    render() {
        return (
            <ImageBackground source={Images.icBackGround} style={styles.backgroundContainer}>
            <View>
                <View style ={styles.center} >
                <Image source={Images.icLogo} style={styles.logo} />
                </View>
                <View>
                <TextInput style={styles.input}
                placeholder={"Nhập địa chỉ website: "}
                value={this.state.link}
                onChangeText ={(text) => this.setState({link: text})}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlibeColorAndroid='transparent'
          />

                </View>
                
                <TouchableOpacity  onPress={this._gotoWeb} style={[nstyles.nrow,{ paddingTop: 30,justifyContent:'center' }]}>
                    <Image source={Images.icIcon} style={nstyles.nIcon28}></Image>
                    <Text style={styles.text}>GO</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
  backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center'
    },
    center:{
      justifyContent: 'center',
      width:'100%',
      alignItems:'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    logo: {
      width: 150,
      height: 57,
      marginBottom: 50,  
    },
    input: {
      width: 300,
      height: 35,
      borderRadius: 25,
      fontSize: 12,
      backgroundColor: '#CFCFCF',
      color: '#888888',
      padding: 'auto',
      textAlign:'center',
      alignItems:'center'
    },
    text: {
      color: '#888888',
      fontSize: 20,
      textAlign: 'center',
      paddingLeft: 10
    },
    icon:{
      
    }
});
export default Test;
