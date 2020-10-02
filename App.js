import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import MainPage from './components/Login Screens/mainpage'
import SignIn from './components/Login Screens/Signin'
import SignUp from './components/Login Screens/Signup'
import Next1 from './components/Login Screens/nextbtn'
import Home from './components/MainScreens/Home'
import Search from './components/MainScreens/search'
import Library from './components/MainScreens/library'
import Account from './components/MainScreens/account'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Music_player from './components/ViewScreens/Music_play'
import TrackPlayer from 'react-native-track-player'
import Typescreen from './components/ViewScreens/TypeView/Typescreens'
import Viewscreen from './components/ViewScreens/TypeView/viewscreen'


const Tab  = createBottomTabNavigator();

function Bottomnav(){
    return (
      <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: '#ff5b77',
        showLabel: false,
        tabStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'folder-search' : 'folder-search-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
    );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="Sigin" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="Sigup" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Next" component={Next1} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Bottomnav" component={Bottomnav} options={{headerShown: false}}/>
        <Stack.Screen name="Music_player" component={Music_player} options={{headerShown: false}} />
        <Stack.Screen name="Typescreen" component={Typescreen} options={{headerShown: false}} />
        <Stack.Screen name="Viewscreen" component={Viewscreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
{/*
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import MainPage from './components/Login Screens/mainpage'
import SignIn from './components/Login Screens/Signin'
import SignUp from './components/Login Screens/Signup'
import Next1 from './components/Login Screens/nextbtn'
import Home from './components/MainScreens/Home'
import Search from './components/MainScreens/search'
import Library from './components/MainScreens/library'
import Account from './components/MainScreens/account'
import Music_player from './components/ViewScreens/Music_play'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="Sigin" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="Sigup" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Next" component={Next1} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Music_player" component={Music_player} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;*/}