import React, { Component } from 'react'
import { Text, View,Dimensions,Image,TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Heart from '../../assets/Icons/Heart.png'
import Recently from '../../assets/Icons/recently.jpg'


const width = Dimensions.get('window').width
class Library extends Component {

  constructor(props){
    super(props);
    this.state = {
      day:'',
      bdcolor:'',
      textcolor:''
    }
  }

  render() {
    var date, hour
 
    date = new Date();
    hour = date.getHours(); 
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

    return (
      <View style={{backgroundColor:this.state.bdcolor,flex:1,alignItems:'center'}}>
        <View style={{height: 65,width:width,backgroundColor:this.state.textcolor,borderBottomRightRadius:10,justifyContent:'center'}}>
              <Text style={{color:this.state.bdcolor,fontSize: 23,fontWeight:'bold',marginLeft: 20}}>Library</Text>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Liked')}  style={{height: 80,width:width-10,backgroundColor:this.state.textcolor,margin: 5,borderRadius: 10,justifyContent:'flex-start',alignItems:'center',flexDirection:"row"}}>
          <View style={{height:60,width:60,borderColor:this.state.bdcolor,borderWidth:1,marginLeft: 10,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <Image source={Heart} style={{height: 60,width:60,borderRadius:10}}/>
          </View>
          <Text style={{color:this.state.bdcolor,fontSize: 20,fontWeight:'bold',marginLeft:20}}>Liked Songs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Recent')} style={{height: 80,width:width-10,backgroundColor:this.state.textcolor,margin: 0,borderRadius: 10,justifyContent:'flex-start',alignItems:'center',flexDirection:"row"}}>
          <View style={{height:60,width:60,borderColor:this.state.bdcolor,borderWidth:1,marginLeft: 10,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <Image source={Recently} style={{height: 60,width:60,borderRadius:10}}/>
          </View>
          <Text style={{color:this.state.bdcolor,fontSize: 20,fontWeight:'bold',marginLeft:20}}>Recently Played</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Library