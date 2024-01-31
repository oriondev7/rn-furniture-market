import React from 'react'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Home, Profile, Search } from '../screens'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { Color, ScreenName, Size, Icon } from '../constants'

const Tab = createBottomTabNavigator()

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
}

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={ScreenName.home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <IonIcon
                name={focused ? Icon.tabHome : Icon.unfocusedTabHome}
                size={Size.icon}
                color={focused ? Color.primary : Color.gray2}
              />
            )
          },
        }}
      />

      <Tab.Screen
        name={ScreenName.search}
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <IonIcon
                name={Icon.tabSearch}
                size={Size.icon}
                color={focused ? Color.primary : Color.gray2}
              />
            )
          },
        }}
      />

      <Tab.Screen
        name={ScreenName.profile}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <IonIcon
                name={focused ? Icon.tabProfile : Icon.unfocusedTabProfile}
                size={Size.icon}
                color={focused ? Color.primary : Color.gray2}
              />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}
