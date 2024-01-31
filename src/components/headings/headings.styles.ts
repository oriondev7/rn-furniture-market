import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    marginTop: Size.medium,
    marginBottom: -Size.xSmall,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: Font.semiBold,
    fontSize: Size.xLarge - 2,
    color: Color.black,
  },
})
