/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS,
} from 'react-native'

import AppleHealthKit from 'react-native-apple-healthkit';
//var AppleHealthKit = require('react-native-apple-healthkit');
var _ = require('lodash');



class Project extends Component {

  render() {
    
      let options = {
    permissions: {
        read: ["Height", "Weight", "StepCount", "DateOfBirth", "BodyMassIndex"],
        write: ["Weight", "StepCount", "BodyMassIndex"]
    }
  };
    
    return (
      <View style={styles.container}>
        <SegmentedControlIOS 
          values={['A', 'B', 'C']}
          momentary={true}
          tintColor={"rgba(215,37,37,1)"}
          style={{
            width: 100,
          }}
          selectedIndex={(this.state && this.state.scIndex) || 0}
          onValueChange={(value) => {}}
          onChange={(event) => {
            this.setState({
              scIndex: event.nativeEvent.selectedSegmentIndex
            })
          }}
        />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
