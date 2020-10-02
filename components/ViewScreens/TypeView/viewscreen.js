import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'

export default class Viewscreen extends React.Component{
    render(){
        
        const name = this.props.route.params.Name  
        return(
            <View>
                <Text>Hakdjsfh</Text>
                <Text>{name}</Text>
            </View>
        )
    }
}