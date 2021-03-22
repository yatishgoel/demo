import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


const UsePasswordToggle = () => {
    const [visible,setVisible] = useState(false);
    const Icon = (
        <TouchableOpacity onPress={()=> setVisible(visible => !visible)}>

            <MaterialCommunityIcons
                name={visible ? "eye-off-outline":"eye-outline"}
                size={25}
             style={styles.icon}
              />
        </TouchableOpacity>
    )
    const InputType = visible ? "text" : "password";
    return [InputType,Icon];
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  icon: {
    marginRight: 10,
    flexDirection:'row-reverse',
    color: '#94bafc'
  },
});
export default UsePasswordToggle;
