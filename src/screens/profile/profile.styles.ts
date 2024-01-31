import { StyleSheet } from 'react-native'
import { Color, Font, Size } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightWhite,
  },

  statusBar: {
    backgroundColor: Color.gray,
  },

  coverContainer: {
    width: '100%',
  },

  cover: {
    height: 290,
    width: '100%',
    resizeMode: 'cover',
  },

  profileContainer: {
    flex: 1,
    alignItems: 'center',
  },

  profile: {
    height: 155,
    width: 155,
    borderRadius: 78,
    borderColor: Color.primary,
    borderWidth: 2,
    resizeMode: 'cover',
    marginTop: -90,
  },

  name: {
    fontFamily: Font.bold,
    color: Color.primary,
    marginVertical: 5,
  },

  signInButton: {
    backgroundColor: Color.secondary,
    borderWidth: 0.4,
    borderColor: Color.primary,
    borderRadius: Size.xLarge,
    marginBottom: 15,
  },

  signInButtonText: {
    fontFamily: Font.semiBold,
    color: Color.gray,
    fontSize: 14,
    lineHeight: 26,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },

  menuText: {
    fontFamily: Font.regular,
    color: Color.gray,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 26,
  },

  menuWrapper: {
    marginTop: Size.xLarge,
    width: Size.width - Size.large,
    backgroundColor: Color.lightWhite,
    borderRadius: 12,
  },

  menuItem: {
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomColor: Color.gray,
  },
})
