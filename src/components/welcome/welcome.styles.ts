import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
  },

  title: {
    fontFamily: Font.bold,
    fontSize: Size.xxLarge - 5,
    marginTop: Size.xSmall,
    color: Color.black,
  },

  subTitle: {
    fontFamily: Font.bold,
    fontSize: Size.xxLarge - 5,
    color: Color.primary,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.secondary,
    borderRadius: Size.medium,
    marginVertical: Size.medium,
    height: 50,
  },

  searchIcon: {
    marginHorizontal: 10,
    color: Color.gray,
  },

  searchWrapper: {
    flex: 1,
    backgroundColor: Color.secondary,
    marginRight: Size.small,
    borderRadius: Size.small,
  },

  searchInput: {
    fontFamily: Font.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: Size.small,
  },

  searchButton: {
    width: 50,
    height: '100%',
    borderRadius: Size.medium,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
})
