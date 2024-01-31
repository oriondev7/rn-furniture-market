/**
 *
 * @format
 */

import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { BottomTabNavigator } from './navigators/BottomTabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  Cart,
  NewArrivals,
  Orders,
  ProductDetails,
  SignUp,
  SingIn,
} from './screens'
import { ScreenName } from './constants'

const Stack = createNativeStackNavigator()

const App = (): React.JSX.Element => {
  SplashScreen.hide()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.bottomNavigation}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenName.cart}
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenName.productDetails}
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenName.newArrivals}
          component={NewArrivals}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenName.signIn}
          component={SingIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenName.signUp}
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenName.orders}
          component={Orders}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
