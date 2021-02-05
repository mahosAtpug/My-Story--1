import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {Header} from "react-native-elements";



export default class WriteStory extends React.Component{

    constructor(){
        super()
            this.state={
                title:"",
                author:"",
                write:""
            }
        
    }

    render(){
        return(
         <View style={{flex:1 , justifyContent:"center" , alingItems:"center"}}>

             <Header backgroundColor={"cyan"} centerComponent={{
                text:"My Story",
                style:{color:"red" ,fontSize:20}
             }}/>

             <TextInput style={styles.inputBox} onChangeText={(input)=>{
                 this.setState({
                    title:input
                    })
            }}/>

            <TextInput style={styles.inputBox} onChangeText={(input)=>{
                 this.setState({
                    author:input
                    })
            }}/>

            <TextInput style={styles.inputBox} onChangeText={(input)=>{
                 this.setState({
                    write:input
                    })
            }}/>

            <TouchableOpacity style={styles.submitButton}>
               <Text styles={styles.submitButtonText}>
                 SUBMIT
               </Text>
           </TouchableOpacity>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        marginTop:50,
        width:"80%",
        alignSelf:"center",
        borderWidth:4,
        height:40,
        textAlign:"center", 
        backgroundColor:"white"
      }

    });