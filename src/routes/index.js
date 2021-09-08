import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import {
  Home,
  SplashScreen,
  Datail,
  SearchScreen,
  FavoritesScreen,
} from '../screens'
import { theme } from '~/styles/theme'

const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
}

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons name={routeIcons[route.name]} size={size} color={color} />
          )
        },
        headerShown: false,
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.dark,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="BottomRoute" component={BottomRoute} />
        <Stack.Screen name="Datail" component={Datail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
