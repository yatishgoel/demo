import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../AppButton';
import Screen from './Screen';


export default function SignUpScreen({navigation}) {
  return (
    <Screen style={styles.container}>
    
        <View style={styles.container}>
            <AppButton title="Sign Up" onPress={()=> navigation.navigate('Register')} normal="true"/>
        </View>
   
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
