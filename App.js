/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Login from './src/components/login/login.js'; 
import Today from './src/components/today.js';
import Tomorrow from './src/components/tomorrow.js';
import Calendar from './src/components/calendar.js';

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  }
  
  render() { 
    return (
        <AppStackNavigator></AppStackNavigator>
      );
  }
}

  const TabNav = createBottomTabNavigator({
    TodayScreen: {screen: Today,
      navigationOptions:{
        tabBarLabel:'Idag',   
      }
    },
    TomorrowScreen:{screen: Tomorrow,
      navigationOptions:{
        tabBarLabel:'Imorgen',   
      }
    },
    CalendarScreen: {screen: Calendar,
      navigationOptions:{
        tabBarLabel:'Kalender',   
      }
    }
    });

    const AppStackNavigator = createStackNavigator({
      LoginScreen: Login,
      TabNav: TabNav,

      });

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

