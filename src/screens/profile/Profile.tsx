import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './profile.styles'
import { AsyncStorageKey, Color, Icon, ScreenName, Size } from '../../constants'
import ADIcon from 'react-native-vector-icons/AntDesign'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SLIcon from 'react-native-vector-icons/SimpleLineIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { UserDataModel } from '../../models'

export const Profile = () => {
  const [userData, setUserData] = useState<UserDataModel | undefined>(undefined)
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    checkUserStatus()
  }, [])

  const checkUserStatus = async () => {
    const id = await AsyncStorage.getItem(AsyncStorageKey.id)
    const userID = `${AsyncStorageKey.user}${JSON.parse(id)}`

    try {
      const user = await AsyncStorage.getItem(userID)

      if (user) {
        const userData = JSON.parse(user)

        setUserData(userData)
        setIsUserSignedIn(true)
      }
    } catch (error) {
      console.log('Error retrieving the data', error)
    }
  }

  const clearCache = () => {
    Alert.alert(
      'Clear Cache',
      'Are you sure you want to delete all saved data on your device?',
      [
        {
          text: 'Continue',
          onPress: () => console.log('Continue cache'),
          style: 'destructive',
        },

        {
          text: 'Cancel',
          onPress: () => console.log('Cancel cache'),
          isPreferred: true,
        },
      ]
    )
  }

  const deleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Continue',
          onPress: () => console.log('Continue da'),
          style: 'destructive',
        },

        {
          text: 'Cancel',
          onPress: () => console.log('Cancel da'),
          isPreferred: true,
        },
      ]
    )
  }

  const signOut = async () => {
    try {
      const id = await AsyncStorage.getItem(AsyncStorageKey.id)
      const userID = `${AsyncStorageKey.user}${JSON.parse(id ?? '')}`
      await AsyncStorage.multiRemove([AsyncStorageKey.id, userID])
      navigation.replace(ScreenName.bottomNavigation)
    } catch (error) {
      console.log('Cannot sign out', error)
    }
  }

  const showSignOutAlert = () => {
    Alert.alert('Sing Out', 'Are you sure you want to sign out?', [
      {
        text: 'Continue',
        onPress: () => signOut(),
        style: 'destructive',
      },

      {
        text: 'Cancel',
        onPress: () => console.log('Cancel'),
        isPreferred: true,
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={Color.gray} />

        <View style={styles.coverContainer}>
          <Image
            source={require('../../assets/images/five.jpg')}
            style={styles.cover}
          />
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/six.jpg')}
            style={styles.profile}
          />

          <Text style={styles.name}>
            {userData ? userData.username : 'Please sign in into your account'}
          </Text>

          {isUserSignedIn === true ? (
            <View style={styles.signInButton}>
              <Text style={styles.signInButtonText}>
                {userData ? userData.email : 'No Email'}
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.signIn)}
            >
              <View style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          )}

          <ScrollView showsHorizontalScrollIndicator={false}>
            {isUserSignedIn === true && (
              <View style={styles.menuWrapper}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(ScreenName.orders)}
                >
                  <View style={styles.menuItem}>
                    <MCIcon
                      name={Icon.profileOrders}
                      size={Size.icon}
                      color={Color.primary}
                    />

                    <Text style={styles.menuText}>Orders</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate(ScreenName.cart)}
                >
                  <View style={styles.menuItem}>
                    <SLIcon
                      name={Icon.profileCart}
                      size={Size.icon}
                      color={Color.primary}
                    />

                    <Text style={styles.menuText}>Cart</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={clearCache}>
                  <View style={styles.menuItem}>
                    <MCIcon
                      name={Icon.profileClearCache}
                      size={Size.icon}
                      color={Color.primary}
                    />

                    <Text style={styles.menuText}>Clear Cache</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={deleteAccount}>
                  <View style={styles.menuItem}>
                    <ADIcon
                      name={Icon.profileDeleteAccount}
                      size={Size.icon}
                      color={Color.primary}
                    />

                    <Text style={styles.menuText}>Delete Account</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={showSignOutAlert}>
                  <View style={styles.menuItem}>
                    <ADIcon
                      name={Icon.profileSignOut}
                      size={Size.icon}
                      color={Color.primary}
                    />

                    <Text style={styles.menuText}>Sign Out</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
