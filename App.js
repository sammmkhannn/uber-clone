import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store} from "./store.js";
import HomeScreen from './screen/HomeScreen.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapsScreen from './screen/MapScreen.js';
import EatsScreen from './screen/EatsScreen.js';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}> 
    <NavigationContainer>
      <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerShown:false
        }} />
        <Stack.Screen
        name="MapScreen"
        component={MapsScreen}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
         name="EatsScreen" 
         component={EatsScreen} 
         options={{
          headerShown:false
        }} />
      </Stack.Navigator>
    </SafeAreaProvider> 
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:"yellow"
  },
  heading:{
    color:"green",
  }
});
