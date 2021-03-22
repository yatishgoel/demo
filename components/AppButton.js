import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
// import UseCheckBox from "./RadioButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";


function AppButton({ title, width = "100%", onPress , navigation,normal=false}) {
    // const [CheckType,checkb] = UseCheckBox();
    const [visible,setVisible] = useState(true);
  return (
      <>
      {
        !normal &&
      <View style={styles.container}>
            
        
            
            <TouchableOpacity onPress={()=>
              setVisible(visible => !visible)
              }>
    
                <MaterialCommunityIcons
                    name={visible ? "checkbox-blank-outline":"checkbox-marked"}
                    size={25}
                 style={styles.icon}
                  />
            </TouchableOpacity>
            

            <Text style={[styles.text_2,{color: "gray"}]}>I agree to the 
            
            {/* <TouchableOpacity onPress={() => navigation.navigate('Terms')}> */}
    
             <Text style={[styles.text_2,{color: "blue"},{textDecorationLine: 'underline'}]}> Terms & Conditions </Text>
            
         {/* </TouchableOpacity> */}
               and <Text style={[styles.text_2,{color: "blue"},{textDecorationLine: 'underline',}]}>Privacy Policy</Text> 
            </Text>
    
            
            </View>
      }
    
      {/* {checkb} */}

      {
        normal && <TouchableOpacity
        style={[styles.button, { width }]}
        onPress={onPress}
      ><Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      }
    {
        !visible && !normal &&
    <TouchableOpacity
      style={[styles.button, { width }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    }
    {
        visible && !normal &&
    <TouchableOpacity
      style={[styles.button, { width }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    }
    </>
  );
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
  button: {
    backgroundColor: '#1c5dde',
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  button_unchecked: {
    borderColor: '#1c5dde',
    borderWidth:2,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: "bold",
  },
  text_unchecked: {
    fontSize: 18,
    color: '#1c5dde',
    fontWeight: "bold",
  },
  text_2:{
    flex:1,
    marginTop:2,
    marginLeft:10

}
});

export default AppButton;
