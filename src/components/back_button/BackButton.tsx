import { TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Color, Icon, Size } from '../../constants'
import { styles } from './back_button.styles'
import { BackButtonProps } from './back_button.types'

export const BackButton: FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <IonIcon
        name={Icon.navigationLeft}
        size={Size.largeIcon}
        color={Color.primary}
      />
    </TouchableOpacity>
  )
}
