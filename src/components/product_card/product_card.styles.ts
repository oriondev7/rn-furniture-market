import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 240,
    borderRadius: Size.medium,
    backgroundColor: Color.secondary,
  },

  imageContainer: {
    flex: 1,
    marginHorizontal: 6,
    marginTop: Size.small / 2,
    borderRadius: Size.small,
    overflow: 'hidden',
  },

  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  details: {
    padding: Size.small,
  },

  title: {
    fontFamily: Font.bold,
    fontSize: Size.large,
    marginBottom: 2,
    color: Color.black,
  },

  supplier: {
    fontFamily: Font.regular,
    fontSize: Size.small,
    color: Color.gray,
  },

  price: {
    fontFamily: Font.bold,
    color: Color.black,
    fontSize: Size.medium,
  },

  button: {
    position: 'absolute',
    bottom: Size.xSmall,
    right: Size.xSmall,
  },
})
