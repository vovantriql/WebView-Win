import { View, Text, Button, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {AppStack} from './src/router/screen'
import React, { Component } from 'react';

const AppContainer = createAppContainer(AppStack);

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <AppContainer
				ref={nav => {
					this.navigator = nav;
				}}
			>
				<StatusBar
					backgroundColor="#FFFFFF"
					barStyle="light-content"
					translucent={true}
				/>
			</AppContainer>
    );
  }
}

export default App;