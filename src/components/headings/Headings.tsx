import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { styles } from './headings.styles'
import { Color, Icon, ScreenName, Size } from '../../constants'
import { useNavigation } from '@react-navigation/native'

export const Headings = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Arrivals</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.newArrivals)}
        >
          <IonIcon name={Icon.iosGrid} size={Size.icon} color={Color.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
