import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import {CalendarList} from 'react-native-calendars';

export default class Calendar extends Component {

    constructor(props){
        super(props)
        this.state = {
          markedDay:{}
        }
      }
      select(day) {
        const markedDay = {[day.dateString]:{selected: true, marked: true}}
        this.setState({markedDay: markedDay})
      }
      render() {
        return (
          <CalendarList
          scrollEnabled={true}
          onDayPress={this.select.bind(this)}
          markedDates={this.state.markedDay}
          pastScrollRange={0}
          minDate={new Date}
          theme={{
            selectedDayBackgroundColor: 'orange',
            todayTextColor: 'orange',
            dotColor: 'grey',
            arrowColor: 'orange',
            monthTextColor: 'blue',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          futureScrollRange={12}
        />
        )
      }
    }