import React from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import Terms from "../components/Screens/Terms";
import RegisterScreen from "../components/Screens/RegisterScreen";
import Logined from '../components/Screens/Logined'
import AppButton from "../components/AppButton";
import LoginScreen from '../components/Screens/LoginScreen'
import { Button } from "react-native";
import SignUpScreen from "../components/Screens/SignupScreen";


const Stack = createStackNavigator();

const MainScreenNavigator = () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
        headerShown: false
      }}
  
  >
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        
       
      />
    <Stack.Screen name="Terms" component={Terms}/>
    
    <Stack.Screen name="Button" component={AppButton}/>
    <Stack.Screen name="Logined" component={Logined}/>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="SignUp" component={SignUpScreen}/>
    
  </Stack.Navigator>
);

export default MainScreenNavigator;
