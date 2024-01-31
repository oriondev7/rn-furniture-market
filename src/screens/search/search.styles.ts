import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Size.small,
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

  emptyResultsImage: {
    resizeMode: 'contain',
    width: '100%',
    opacity: 0.2,
  },

  emptyResultsText: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
  },
})
