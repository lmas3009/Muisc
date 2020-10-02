import React from 'react'
import {View,Text,FlatList,TouchableOpacity,Image,StyleSheet,ActivityIndicator} from 'react-native'
import axios from 'axios';

export default class Typescreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          day:'',
          bdcolor:'',
          textcolor:'',
          dataSource:null,
          loading: true
        }
      }
      

    render(){
    
    var date, hour
    date = new Date();
    hour = date.getHours(); 
    //hour = hour -10
    if(hour>=4 && hour<12){
      this.state.day = 'Morning',
      this.state.bdcolor = 'white',
      this.state.textcolor = "black"
    }
    else if(hour>=12 && hour<16){
      this.state.day = 'Afternoon',
      this.state.bdcolor = 'lightgrey',
      this.state.textcolor = "black"
    }
    else if(hour>=16 && hour<19){
      this.state.day = 'Evening',
      this.state.bdcolor = 'grey',
      this.state.textcolor = "white"
    }
    else{
      this.state.day = "Night",
      this.state.bdcolor = 'black',
      this.state.textcolor = "white"
    }

        const name = this.props.route.params.Name  
        axios.get("https://music-application-ftd.000webhostapp.com/Categories/"+name+".php")
            .then(response => {
                setTimeout(() => {
                    this.setState({
                    dataSource: response.data,
                    lodaing : false
                    })
                }, 2000) 
            })
            .catch(error => {
                console.log(error);
            });
        return (
        <View style={{justifyContent: 'center',alignItems: 'center',backgroundColor:this.state.bdcolor,flex:1}}>
            <FlatList
              numColumns = {2}
              keyExtractor = {(item) => item.id}
              data = {this.state.dataSource}
              renderItem = {({item}) => (
                <View style={[styles.decoration,{borderColor: this.state.textcolor}]}>
                  <TouchableOpacity style={[styles.type,{borderColor:this.state.textcolor}]} onPress={()=> this.props.navigation.navigate('Viewscreen',{Name: item.title})}>
                      <Image source={{uri: item.artwork}} style={styles.image1}/>
                      <Text style={[styles.text,{color:this.state.textcolor}]}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              )}
              />
              {/* {this.state.loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color={this.state.textcolor} />
                </View>
                } */}
        </View>
        )
    }
}
const styles = StyleSheet.create({
    decoration:{
        width: 162,
        margin: 5,
        marginBottom: 10,
        borderWidth:1,
        borderColor:'black',
        borderRadius:10

    },
    type:{
        flexDirection:'column',
        alignItems:'center',
    },
    image1:{
        height: 160,
        width: 160,
        resizeMode:'stretch',
        borderRadius: 10
    },
    text:{
        textAlign:'center',
        fontSize:15,
        marginTop:5,
        marginBottom:5,
        marginLeft:10,
        marginRight:10
    }
})