import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  activeContainer: {
    height: 50,
    width: '100%',
    backgroundColor: Color.primary,
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: Size.medium,
  },

  inactiveContainer: {
    height: 50,
    width: '100%',
    backgroundColor: Color.gray,
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: Size.medium,
  },

  title: {
    fontFamily: Font.bold,
    color: Color.white,
    fontSize: 18,
    textAlign: 'center',
  },
})
