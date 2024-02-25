// HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";



const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    
      <Text style ={styles.text}>Home Screen</Text>
      <Pressable 
        style ={styles.button}
        title="Learn More!"
        onPress={() => navigation.navigate("Detail")}
      />
      <Pressable
        style ={styles.button}
        title="Contributor"
        onPress={() => navigation.navigate("Contributer")}
      />
       <Pressable
       style ={styles.button}
        title="Business"
        onPress={() => navigation.navigate("Business")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'red',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  }

});


export default HomeScreen;
