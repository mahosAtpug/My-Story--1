import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import ReadStory from "./screens/ReadStoryScreen";
import WriteStory from "./screens/WriteStoryScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import WriteStory from "../screens/WriteStoryScreen";
import ReadStory from "../screens/ReadStoryScreen"

export default function App() {
  return (
    <AppContainer/>    
  );
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStoryScreen},
  WriteStory: {screen: WriteStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}

);

const AppContainer=createAppContainer(TabNavigator);