import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './home.styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import { Carousel, Headings, Welcome } from './components'

import { AsyncStorageKey, Icon, ScreenName, Size } from '../../constants'
import { ProductRow } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Home = ({ navigation }) => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [userData, setUserData] = useState(null)
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  useEffect(() => {
    checkUserStatus()
  }, [])

  const checkUserStatus = async () => {
    const id = await AsyncStorage.getItem(AsyncStorageKey.id)

    try {
      const user = await AsyncStorage.getItem(`${AsyncStorageKey.user}${JSON.parse(id)}`)

      if (user) {
        const userData = JSON.parse(user)
        
        setUserData(userData)
        setIsUserSignedIn(true)
      }
    } catch (error) {
      console.log('Error retrieving the data', error)
    }
  }

  const onLayout = event => setContainerWidth(event.nativeEvent.layout.width);

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <IonIcon
            name={Icon.location}
            size={Size.icon}
          />

          <Text style={styles.location}>{userData ? userData.location : 'Location'}</Text>

          <View style={styles.cartContainer}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.cart)}
            >
              <FontistoIcon
                name={Icon.cart}
                size={Size.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.scrollContainer} onLayout={onLayout}>
        <ScrollView>
          <Welcome />
          <Carousel width={containerWidth} />
          <Headings />
          <ProductRow />
          <View style={{ width: '100%', height: 300 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
