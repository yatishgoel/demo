import React, { useState } from "react";
import { View, TextInput, StyleSheet,Text, TouchableOpacity, CheckBox } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import UsePasswordToggle from "../hooks/UsePasswordToggle";



function AppTextInput({ icon, width = "100%",name , ...otherProps}) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    const [passwordInputType,ToggleIcon] = UsePasswordToggle();
    

  return (
    <View style={[styles.container, { width }]}>
        
        <TextInput
        style={[styles.text, { flex: 1 }]}
        secureTextEntry={passwordInputType=="password"}
        {...otherProps}
        />
        
    
        {(touched[name] && !errors[name] && name =='email') && (
          <MaterialCommunityIcons
            name={icon}
            size={25}
            style={styles.icon_verified}
          />
        )}
   

        {name =='password' && (
          ToggleIcon

        )}
       
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f5fe',
    borderRadius: 15,
    flexDirection: "row",
    padding: 12,
    marginVertical: 7,
  },
  icon: {
    marginRight: 10,
    flexDirection:'row-reverse',
    color: 'gray'
  },
  icon_verified: {
    marginRight: 10,
    flexDirection:'row-reverse',
    color: '#1c5dde'
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
