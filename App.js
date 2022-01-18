import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../jeffv2/core/theme'
import Home  from '../jeffv2/screens/Home'
import  LoginScreen from './screens/LoginScreen'
import MainPage  from '../jeffv2/screens/MainPage'

import RegisterScreen  from './screens/RegisterScreen'
import menue from './screens/menue'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >       
           <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Main" component={MainPage} />
          <Stack.Screen name="menu" component={menue} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

