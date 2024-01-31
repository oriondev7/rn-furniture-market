import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightWhite,
  },

  upperRow: {
    width: Size.width - 44,
    marginHorizontal: Size.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: Size.xxLarge,
    zIndex: 2,
  },

  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  details: {
    marginTop: -Size.large,
    backgroundColor: Color.lightWhite,
    width: Size.width,
    borderTopLeftRadius: Size.medium,
    borderTopRightRadius: Size.medium,
    paddingHorizontal: 12,
  },

  titleRow: {
    paddingBottom: Size.small - 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 12,
  },

  title: {
    fontFamily: Font.semiBold,
    fontSize: Size.large,
  },

  priceWrapper: {
    backgroundColor: Color.secondary,
    borderRadius: Size.large,
  },

  price: {
    paddingHorizontal: 10,
    fontFamily: Font.semiBold,
    fontSize: Size.large,
  },

  ratingRow: {
    paddingBottom: Size.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 5,
  },

  ratingContainer: {
    top: Size.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  countContainer: {
    top: Size.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 74,
  },

  ratingText: {
    color: Color.gray,
    fontFamily: Font.medium,
    fontSize: Size.rating,
  },

  countText: {
    color: Color.gray,
    fontFamily: Font.medium,
    fontSize: Size.rating,
  },

  descriptionContainer: {
    marginTop: Size.large * 2,
  },

  descriptionTitle: {
    fontFamily: Font.medium,
    fontSize: Size.large - 2,
  },

  description: {
    fontFamily: Font.regular,
    fontSize: Size.small,
    textAlign: 'justify',
    marginBottom: Size.small,
  },

  locationContainer: {
    marginBottom: Size.small,
  },

  locationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.secondary,
    padding: 5,
    borderRadius: Size.large,
  },

  location: {
    flexDirection: 'row',
  },

  cartRow: {
    paddingBottom: Size.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cartButton: {
    width: '85%',
    backgroundColor: Color.black,
    padding: 7,
    borderRadius: Size.large,
    alignItems: 'center',
  },

  cartButtonTitle: {
    fontFamily: Font.semiBold,
    fontSize: Size.medium,
    color: Color.lightWhite,
  },

  addToCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: Size.small,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
