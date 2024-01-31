import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { FC } from 'react'
import { styles } from './big_bottom_button.styles'
import { BigBottomButtonProps } from './big_bottom_button.types'

export const BigBottomButton: FC<BigBottomButtonProps> = ({
  onPress,
  title,
  isActive,
  isLoading,
}) => {
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
