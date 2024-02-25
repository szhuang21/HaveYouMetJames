// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./screens/DetailScreen";
import BusinessScreen from "./screens/BusinessScreen";
import ContributerScreen from "./screens/ContributerScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Business" component={BusinessScreen} />
        <Stack.Screen name="Contributer" component={ContributerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
