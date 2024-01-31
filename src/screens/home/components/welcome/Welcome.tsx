import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { styles } from './welcome.styles'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Color, Icon, ScreenName, Size } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'

export const Welcome = () => {
  const navigation = useNavigation()

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Find The Most</Text>
        <Text style={styles.subTitle}>Luxurious Furniture</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <FeatherIcon
            name={Icon.search}
            size={Size.icon}
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onPressIn={() => navigation.navigate(ScreenName.search)}
            placeholder='Black Sofa'
          />
        </View>

        <View>
        <TouchableOpacity style={styles.searchButton}>
          <IonIcon
            name={Icon.camera}
            size={Size.xLarge}
            color={Color.offwhite}
          />
        </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}
