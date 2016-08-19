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
    this.state={ text1: ' ' ,//text1的預設值是123 
               active: false  //預設active是false
            
               
    }
  }
  
  onPress = () => {        
        console.log('pressed'); 
        this.setState({active: !this.state.active}) //當點急按鈕 會發生的事情,在此是只會變換active的值 上面預設是false,點按鈕就會變成true,反之
        
       
      
  }
  
  render() { //若textinput有預設值的話 一定要用onchangetext依照新輸入的值去做更新 否則無法取新輸入的值
    return (
     
      <View style={[styles.container,
                    this.state.active && styles.button1, //當是active的預設值(true),styles.button1採用
                    !this.state.active && styles.button2, //當是active的相反值(false),styles.button2採用
      
      ]}> 

      
        <TouchableOpacity style={{backgroundColor: 'gray', width: 150 ,height:50 ,textAlign: 'center',fontSize: 20}}  onPress={this.onPress}>
        <Text>change</Text>
        </TouchableOpacity>
        
        
  
       
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
    flex: 1, //與其他子元素的比例分配  1就是父元素本身了 
    //flexDirection: 'row', 變成橫的排 不會直的排
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
  
  button1: {
    backgroundColor:'lightblue'
  },
  
  button2: {
    backgroundColor:'lightgreen'
  }
  
});

AppRegistry.registerComponent('ProjectName', () => ProjectName);
