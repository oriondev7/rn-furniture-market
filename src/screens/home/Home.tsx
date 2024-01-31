import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  LayoutChangeEvent,
  Platform,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './home.styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import { AsyncStorageKey, Color, Icon, ScreenName, Size } from '../../constants'
import { Carousel, Headings, ProductRow, Welcome } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { UserDataModel } from '../../models'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

export const Home = () => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [userData, setUserData] = useState<UserDataModel | undefined>(undefined)
  const navigation = useNavigation()
  const tabBarHeight = useBottomTabBarHeight()
  console.log(`[tabBarHeight]: ${tabBarHeight}`)
  useEffect(() => {
    checkUserStatus()
  }, [])

  const checkUserStatus = async () => {
    try {
      const id = await AsyncStorage.getItem(AsyncStorageKey.id)
      const user = await AsyncStorage.getItem(
        `${AsyncStorageKey.user}${JSON.parse(id ?? '')}`
      )

      if (user) {
        const userData = JSON.parse(user)

        setUserData(userData)
      }
    } catch (error) {
      console.log('Error retrieving the data', error)
    }
  }

  const onLayout = (event: LayoutChangeEvent) =>
    setContainerWidth(event.nativeEvent.layout.width)

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <IonIcon name={Icon.location} size={Size.icon} color={Color.black} />

          <Text style={styles.location}>
            {userData ? userData.location : 'Location'}
          </Text>

          <View style={styles.cartContainer}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>0</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.cart)}
            >
              <FontistoIcon
                name={Icon.cart}
                size={Size.icon}
                color={Color.black}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.scrollContainer} onLayout={onLayout}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Welcome />
          <Carousel width={containerWidth} />
          <Headings />
          <ProductRow />
          <View style={{ height: Platform.OS === 'android' ? 180 : 140 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
