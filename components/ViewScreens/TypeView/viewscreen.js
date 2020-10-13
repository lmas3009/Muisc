import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Image,ActivityIndicator} from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Viewscreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          day:'',
          bdcolor:'',
          heart:false,
          dataSource:null,
          loading: true
        }
      }

    render(){
        
         const name = this.props.route.params.Name  
         const Artwork = this.props.route.params.Artwork 
         const title_name = name.split(" ").join(""); 
        axios.get("https://music-application-ftd.000webhostapp.com/Bollywood/"+title_name+".php")
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
            
            
        return(
            <View style={{backgroundColor:'#ececec',flex:1}}>
                <Image style={{height: '35%',width: '100%',borderBottomLeftRadius: 50,borderBottomRightRadius: 50}}
                    source={{
                    uri:
                        Artwork,
                    }}
                    resizeMode="stretch" />
                {this.state.dataSource==null ?
                <View style={{justifyContent:'center',alignItems:'center',marginTop: 200}}>
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" color="black"/>
                    </View>
                    <Text>Fetching Data</Text>
                </View>
                :
                <FlatList
                    keyExtractor = {(item) => item.id}
                    data = {this.state.dataSource}
                    renderItem = {({item}) => (
                        <View style={[styles.decoration,{borderColor: this.state.textcolor}]}>
                        <TouchableOpacity style={[styles.type,{borderColor:this.state.textcolor}]} onPress={()=> this.props.navigation.navigate('Viewscreen',{Name: item.title})}>
                        <View style={{flexDirection:'row',margin: 5,alignItems:'center'}}>
                                <Image source={{uri: item.artwork}} style={styles.image1}/>
                                <View style={{flex:1,alignItems:'center',justifyContent: 'space-between',flexDirection:'row'}}>
                                <View style={{marginLeft: 10,width: 200}}>
                                    <Text style={[styles.text]}>{item.title}</Text>
                                    <Text style={[styles.text1]}>{item.artist}</Text>
                                </View>  
                                <View style={{ flexDirection: 'row',alignItems:'center',marginRight: 10}}>
                                    {this.state.heart ? <Icon 
                                    onPress={()=> this.setState({
                                        heart: false
                                    })}
                                    name='heart'
                                    size={25}
                                    // color="#f6355d"
                                    color="red"
                                    /> : <Icon 
                                    onPress={()=> this.setState({
                                        heart: true
                                    })}
                                    name='heart-outline'
                                    size={25}
                                    color='black'
                                    />}
                                    <View style={{marginLeft: 5}}/>
                                    <Icon 
                                    onPress={()=> alert("sadkjhkj")}
                                    name='dots-vertical'
                                    size={25}
                                    color={this.state.textcolor}
                                    />
                                </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        </View>
                    )}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    decoration:{
        backgroundColor:'white',
        borderRadius:10,
        margin: 10

    },
    // type:{
    //     flexDirection:'column',
    //     alignItems:'center',
    // },
    image1:{
        height: 70,
        width: 70,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    text:{
        fontSize:15,
        marginTop:5,
        marginBottom:2,
        marginLeft: 5,
        marginRight:10,
        fontWeight:'bold'
    },
    text1:{
        fontWeight:'600',
        color:'grey',
        margin: 5
    }
})