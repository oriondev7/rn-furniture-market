import { StyleSheet } from 'react-native'
import { Color, Font, Shadow, Size } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Size.small,
    flexDirection: 'row',
    padding: Size.medium,
    borderRadius: Size.small,
    backgroundColor: Color.white,
    ...Shadow.medium,
    shadowColor: Color.lightWhite,
  },

  productContainer: {
    width: 70,
    backgroundColor: Color.secondary,
    borderRadius: Size.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 65,
    borderRadius: Size.small,
    resizeMode: 'cover',
  },

  textContainer: {
    flex: 1,
    marginHorizontal: Size.medium,
  },

  productTitle: {
    fontSize: Size.medium,
    fontFamily: Font.bold,
    color: Color.primary,
  },

  supplier: {
    fontSize: Size.small + 2,
    fontFamily: Font.regular,
    color: Color.gray,
    marginTop: 3,
  },
})
