import React from 'react' 
import {View,Text} from 'react-native'
import Firebase from '../Firebase'

export default class Splashscreen extends React.Component{
    render(){
        var data = Firebase.auth().currentUser
        if(data){
            this.props.navigation.navigate("Bottomnav")
        }
        else if(!data){
            
            this.props.navigation.navigate("MainPage")
        }
        return(
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Text style={{color:'black'}}>Welcome</Text>
            </View>
            )
    }
}