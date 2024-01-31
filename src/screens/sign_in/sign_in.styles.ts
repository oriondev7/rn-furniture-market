import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  cover: {
    height: Size.height / 3,
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: Font.bold,
    fontSize: Size.xLarge,
    color: Color.primary,
    alignSelf: 'center',
  },

  inputContainer: {
    marginTop: Size.xxLarge,
  },

  wrapper: {
    marginBottom: 20,
  },

  label: {
    fontFamily: Font.regular,
    fontSize: Size.xSmall,
    color: Color.black,
    marginBottom: 5,
    marginRight: 5,
    textAlign: 'right',
  },

  activeInputWrapper: {
    borderColor: Color.secondary,
    borderWidth: 1,
    backgroundColor: Color.lightWhite,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  inactiveInputWrapper: {
    borderColor: Color.offwhite,
    borderWidth: 1,
    backgroundColor: Color.lightWhite,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  iconStyle: {
    marginRight: 10,
  },

  input: {
    flex: 1,
  },

  error: {
    color: Color.red,
    fontFamily: Font.regular,
    fontSize: Size.xSmall,
    marginTop: 5,
    marginLeft: 5,
  },

  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  signUpTitle: {
    marginTop: 20,
    textAlign: 'center',
  },

  signUpAction: {
    marginTop: 20,
    textAlign: 'center',
    color: Color.primary,
  },
})
