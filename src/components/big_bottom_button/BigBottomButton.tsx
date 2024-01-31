import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './big_bottom_button.styles'

export const BigBottomButton = ({ onPress, title, isActive, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isActive ? styles.activeContainer : styles.inactiveContainer}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator /> 
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
     
    </TouchableOpacity>
  )
}
