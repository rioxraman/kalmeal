
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (<>
  
  <StatusBar style='light'/>
  <NavigationContainer>
  
    <Stack.Navigator>
    <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
    </Stack.Navigator>
  
  </NavigationContainer>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
