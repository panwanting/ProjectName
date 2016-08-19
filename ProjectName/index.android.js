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
  TouchableOpacity,
  Image
} from 'react-native';

class ProjectName extends Component {
  
  constructor(props){
    super(props);
    this.state={ text1: 'pokemon index' ,//text1的預設值是123 
                tex2: ''
               
    }
  }
  
  onPress = () => {        
        console.log('pressed');  
        this.setState({text2: this.state.text1});
      
  }
  
  render() { //若textinput有預設值的話 一定要用onchangetext依照新輸入的值去做更新 否則無法取新輸入的值
    return (
     
      <View style={styles.container}> 
       <Text>pokemon index</Text><TextInput
        style={{height: 40, borderColor: 'gray', width: 80}}
        onChangeText={(text1) => this.setState({text1})}  //框框輸入的text1去setState更新constructor裡面預設的text1
        value={this.state.text1} //原本預設的123會被更新成框框輸入的  
       /> 
      
      
        <TouchableOpacity style={{backgroundColor: 'gray', width: 150 ,height:50 ,textAlign: 'center',fontSize: 20}}  onPress={this.onPress}>
          <Text>submit</Text> 
        </TouchableOpacity>
        
        <Image
        style={{height: 80, width: 80}} //圖片記得設定寬度跟高度 預設值是0
        source={{uri: `https://pokeadvisor.com/img/mon/${this.state.text2}.png`}}
        />
        
  
       
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
