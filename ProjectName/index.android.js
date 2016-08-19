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
  TextInput,
  TouchableOpacity
} from 'react-native';

class ProjectName extends Component {
  
  constructor(props){
    super(props);
    this.state={ text1: 'height', //text1的預設值是123 
                text2: 'weight', //text2的預設值是456
                text3: 'BMI'
    }
  }
  
  onPress = () => {        
        console.log('pressed');  
        
        var h = this.state.text1 / 100 ; 
        var w = this.state.text2 ;
        var bmi = w/(h*h) ;
        this.setState({text3:bmi})
  }
  
  render() { //若textinput有預設值的話 一定要用onchangetext依照新輸入的值去做更新 否則無法取新輸入的值
    return (
     
      <View style={styles.container}> 
       <Text>Height:(please enter cm)</Text><TextInput
        style={{height: 40, borderColor: 'gray', width: 80}}
        onChangeText={(text1) => this.setState({text1})}  //框框輸入的text1去setState更新constructor裡面預設的text1
        value={this.state.text1} //原本預設的123會被更新成框框輸入的  
       /> 
       <Text>Weight:</Text>
       <TextInput
        style={{height: 40, borderColor: 'gray', width: 80}}
        onChangeText={(text2) => this.setState({text2})} 
        value={this.state.text2} 
       />
      
        <TouchableOpacity style={{backgroundColor: 'gray'}} onPress={this.onPress}>
          <Text>cal BMI</Text> 
        </TouchableOpacity>
        
        <Text>BMI is {this.state.text3}</Text> 
  
       
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
