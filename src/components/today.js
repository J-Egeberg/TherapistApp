import React, { Component } from 'react';
import { View, Button, Text, ScrollView, StyleSheet } from 'react-native';

export default class Today extends Component {
    state = {
        names: [
           {'name': 'Ben', 'time': '09.30', 'id': 1},
           {'name': 'Susan', 'time': '10.30', 'id': 2},
           {'name': 'Robert', 'time': '11.30', 'id': 3},
           {'name': 'Mary', 'time': '12.30', 'id': 4},
           {'name': 'Daniel', 'time': '14.00', 'id': 5},
           {'name': 'Laura', 'time': '15.30', 'id': 6},
           {'name': 'John', 'time': '16.00', 'id': 7}
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
