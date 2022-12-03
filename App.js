
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#000000' },
    headerTintColor: 'wite',
    sceneContainerStyle: { backgroundColor: '#ccc' },
    drawerContentStyle: { backgroundColor: 'white' },
    drawerInactiveTintColor: '#000000',
    drawerActiveTintColor: '#000000',
    drawerActiveBackgroundColor: '#ccc',
  }}>
    
    <Drawer.Screen name="Categories"  component={CategoriesScreen} options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
    <Drawer.Screen name="Favourites"  component={FavoritesScreen}options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
  </Drawer.Navigator>
}

export default function App() {
  return (<>
  
  <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#fcfcfc' },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown:false
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}  />
          <Stack.Screen name="MealsDetail" component={MealsDetailScreen}  options={{
              title: 'About the Meal'
            }} />
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
