import { StyleSheet } from 'react-native'
import { Size } from '../../constants'

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    alignItems: 'center',
    paddingTop: Size.xxLarge * 2,
  },

  separator: {
    rowGap: 16,
  },
})
