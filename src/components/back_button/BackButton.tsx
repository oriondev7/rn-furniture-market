import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Color, Icon, Size } from '../../constants'
import { styles } from './back_button.styles'

export const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.container}
    >
      <IonIcon
        name={Icon.navigationLeft}
        size={Size.largeIcon}
        color={Color.primary}
      />
    </TouchableOpacity>
  )
}
