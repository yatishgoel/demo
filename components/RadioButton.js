import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";



const UseCheckBox = (props) => {
    const [visible,setVisible] = useState(true);
    const Icon = (
        
        <View style={styles.container}>
            
        
            
        <TouchableOpacity onPress={()=> setVisible(visible => !visible)}>

            <MaterialCommunityIcons
                name={visible ? "checkbox-blank-outline":"checkbox-marked"}
                size={25}
             style={styles.icon}
              />
        </TouchableOpacity>
        

        <Text style={[styles.text,{color: "gray"}]}>I agree to the
        

         <Text style={[styles.text,{color: "blue"},{textDecorationLine: 'underline'}]}>Terms & Conditions</Text>
        
          and <Text style={[styles.text,{color: "blue"},{textDecorationLine: 'underline',}]}>Privacy Policy</Text> 
        </Text>

     
        
        </View>
    
    )
    return [visible,Icon];
}


const styles = StyleSheet.create({
    container:{
    flexDirection: "row",
    padding: 15,
    marginVertical: 7,
    },
  
  icon: {
    color: '#1c5dde',

  },
  text:{
      flex:1,
      marginTop:2,
      marginLeft:10

  }
});
export default UseCheckBox;
