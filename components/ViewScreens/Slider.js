import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer from 'react-native-track-player';
import { render } from 'react-dom';

export default class SliderComp extends React.Component {

    constructor(props){
        super (props);
        this.state = {
            value:0
        }
        setInterval(() => {
            this.setState({
                value:this.state.value+1
            })
        }, 1000);
    }

  formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  };

  handleChange = (val) => {
    this.setState({
        value:val
    })
    TrackPlayer.seekTo(val);
  };

  //components
 render(){
    return (
        <View style={styles.container}>
          <Slider key={1}
            style={{width: 320}}
            minimumValue={0}
            value={this.state.value}
            onValueChange={(value) => this.handleChange(value)}
            maximumValue={234}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            thumbTintColor="#000000"
          />
        </View>
      );
    }
 }

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  timers: {
    color: '#fff',
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});