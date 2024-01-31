import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightWhite,
  },

  wrapper: {
    flex: 1,
    backgroundColor: Color.lightWhite,
  },

  upperRow: {
    width: Size.width - 44,
    marginHorizontal: Size.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Color.primary,
    borderRadius: Size.large,
    top: Size.large,
    zIndex: 2,
  },

  title: {
    fontFamily: Font.semiBold,
    fontSize: Size.medium,
    color: Color.lightWhite,
    marginLeft: 5,
  },
})
