import React, { Component } from 'react';
import { View, Button, Text, ScrollView, StyleSheet } from 'react-native';

export default class Tomorrow extends Component {

    state = {
        names: [
            {'name': 'Yoda', 'time': '09.30', 'id': 1},
            {'name': 'Luke', 'time': '10.30', 'id': 2},
            {'name': 'Han', 'time': '11.30', 'id': 3},
            {'name': 'Legolas', 'time': '12.30', 'id': 4},
            {'name': 'Gimli', 'time': '14.00', 'id': 5},
            {'name': 'Gandalf', 'time': '15.30', 'id': 6},
            {'name': 'Harry', 'time': '16.00', 'id': 7}
        ]
     }
     render() {
        return (
           <View>
              <ScrollView>
                 {
                    this.state.names.map((item, index) => (
                       <View key = {item.id} style = {styles.item}>
                          <Text>{item.name}</Text>
                          <Text>{item.time}</Text>
                       </View>
                    ))
                 }
              </ScrollView>
           </View>
        )
     }
  }
  
  const styles = StyleSheet.create ({
     item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'orange'
     }
  })

    