import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState(`rgb(202, 167, 212)`)
    const onPressHandler = () =>{
      const randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
      console.log(randomColor)
      setBgColor(randomColor)
    }
    const onPressHandler2 = () =>{
      setBgColor("rgb(0, 0, 0)")
    }


    return <View style={[styles.container,{ backgroundColor:bgColor}]} >
      <Pressable onPress={onPressHandler}><Text style={styles.text}>Press Me</Text></Pressable>
      <Pressable onPress={onPressHandler2}><Text style={styles.text2}>Reset</Text></Pressable>
      
    </View>
  
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgb(202, 167, 212)"
  },
  text:{
    padding:14,
    paddingHorizontal:8,
    paddingVertical:8, 
    fontSize:20,
    borderRadius:15,
    backgroundColor:"rgb(202, 167, 212)",
    color:"#fff"
    },
    text2:{
      padding:14,
      paddingHorizontal:8,
      paddingVertical:8, 
      fontSize:20,
      borderRadius:15,
      backgroundColor:"rgb(202, 167, 212)",
      color:"#fff",
      marginVertical:10
      }

})
