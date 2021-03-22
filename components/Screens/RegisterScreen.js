import React, { useState } from "react";

import { StyleSheet,ScrollView, Image, TouchableOpacity, View, Text, TouchableHighlight } from "react-native";
import * as Yup from "yup";
import AppForm from "../forms/AppForm";
import AppFormField from "../forms/AppFormField";
import SubmitButton from "../forms/SubmitButtom";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import GoogleButton from '../GoogleButton';
import axios from "axios";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function RegisterScreen({ navigation }) {

  const handleSubmit = (userDetails) => {
    
    console.log(userDetails);

    axios.post('https://sheet.best/api/sheets/53b8e9e2-6949-484c-a643-2a66e0c6a110', {'email': userDetails.email, 'password':userDetails.password})
    .then(response => {
      console.log(response);
    })
     
    navigation.navigate('Logined')

};

  return (
    
      <ScrollView>
    <Screen style={styles.container}>

      <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDEE"
      onPress={() => navigation.navigate('SignUp')}
      width = {3}
      style = {styles.touch}
      >

      <MaterialCommunityIcons
                name='arrow-left'
                size={50}
                style={styles.icon}
                />
      </TouchableHighlight>
      
        <Text style={styles.text_head}>
            Create {'\n'}Account
        </Text>
        
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="check"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="eye"
          name="password"
          placeholder="Password"
          textContentType="password"
          />
        <SubmitButton title="Create account" />
      </AppForm>
      
      <GoogleButton title="Sign up with Google"/>
      <Text style={styles.text}>Already have an Account? 
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>

     <Text style={[styles.text,{color:'blue'},{fontWeight:'bold'},{textDecorationLine: 'underline'}]}> Log in</Text>
        </TouchableOpacity>
      
       </Text>
    </Screen>
          </ScrollView>
  );
}

const styles = StyleSheet.create({
    arrow:{
        color:"blue",
        width:4,
        height:4
    },
    text_head:{
            fontSize:30,
            paddingTop:20,
            paddingBottom:20
    },
    icon_verified: {
        
        color: '#1c5dde'
      },
    
        text:{
            flex:1,
            marginTop:2,
            marginLeft:10
      
        },
    
  container: {
    padding: 10,
    backgroundColor:"white"
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  forgetPassword: {
    color: 'red',
    textAlign: "center",
    fontSize: 15,
    textDecorationLine: "underline",

  },
  icon: {
    color: '#6790e5',
    marginBottom:100,
    backgroundColor:'#f1f5fe',
    borderRadius:25


  },
  touch :{
    height:50,
    width:50,
    borderRadius:25
  }
});

export default RegisterScreen;
