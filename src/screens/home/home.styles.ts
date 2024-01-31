import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  appBarWrapper: {
    marginHorizontal: Size.small + 8,
    marginVertical: Size.small,
  },

  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  location: {
    fontFamily: Font.semiBold,
    fontSize: Size.medium,
    color: Color.gray,
  },

  cartContainer: {
    alignItems: 'flex-end',
  },

  cartCount: {
    position: 'absolute',
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: Color.systemGreen,
    justifyContent: 'center',
    zIndex: 2,
  },

  cartNumber: {
    fontFamily: Font.regular,
    fontWeight: '600',
    fontSize: 10,
    color: Color.lightWhite,
  },

  scrollContainer: {
    marginHorizontal: Size.small,
  },
})
