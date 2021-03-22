import React from "react";
import { StyleSheet, Text, TouchableOpacity,Image,View } from "react-native";



function GoogleButton({ title, width = "100%", onPress}) {
  return (
    

    <TouchableOpacity
      style={[styles.button, { width }]}
      onPress={onPress}
    > 
    <Image source={require('../assets/google.jpg')} style={styles.image}/>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
      
      
    

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    borderColor: '#1c5dde',
    borderWidth:2,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
  },
  
  text: {
    fontSize: 18,
    color: '#1c5dde',
    fontWeight: "bold",
    marginBottom:3
  },
  image:{
      width:25,
      height:25,
      marginRight:10
  }
});

export default GoogleButton;
