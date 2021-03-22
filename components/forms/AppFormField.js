import React, { useState } from "react";

import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import AppErrorMessage from "./AppErrorMessage";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched,handleChange, errors, touched } = useFormikContext();


  return (
    <>
    
    { name == "email" &&
        <Text style={styles.text}>Your Email</Text>}
        { name == "password" &&
        <Text style={styles.text}>Password</Text>}
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        name = {name}
        {...otherProps}
      />
      
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
const styles = StyleSheet.create({
    text: {
        fontWeight:'bold',
        fontSize: 17,
        marginTop:8

    }
    
})

export default AppFormField;
