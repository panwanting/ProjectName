/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  //要使用標籤記得現在這邊輸入該標籤import
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class ProjectName extends Component {
  
  constructor(props){
    super(props);
    this.state={ text1: '123', //text1的預設值是123 
                text2: '456' //text2的預設值是456
    }
  
  }
  
  
  render() { //若textinput有預設值的話 一定要用onchangetext依照新輸入的值去做更新 否則無法取新輸入的值
    return (
     
      <View style={styles.container}> 
       <TextInput
        style={{height: 40, borderColor: 'gray', Width: 10}}
        onChangeText={(text1) => this.setState({text1})}  //框框輸入的text1去setState更新constructor裡面預設的text1
        value={this.state.text1} //原本預設的123會被更新成框框輸入的  
       /> 
       <TextInput
        style={{height: 40, borderColor: 'gray', Width: 10}}
        onChangeText={(text2) => this.setState({text2})} 
        value={this.state.text2} 
       />
       
        <Text>
          {this.state.text1} {this.state.text2}
        </Text> 
       
        <Text style={styles.welcome}>
          Welcome to React Native! yoyoyoyoyo
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions} numberOfLines={1}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
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

AppRegistry.registerComponent('ProjectName', () => ProjectName);
