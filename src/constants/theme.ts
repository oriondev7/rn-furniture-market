import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

enum Color {
  primary = '#2A4D50',
  secondary = '#DDF0FF',
  tertiary = '#FF7754',

  gray = '#83829A',
  gray2 = '#C1C0C8',

  offwhite = '#F3F4F8',
  white = '#FFFFFF',
  black = '#000000',
  red = '#e81e4d',
  green = ' #00C135',
  lightWhite = '#FAFAFC',
  systemGreen = 'green',
  systemGold = 'gold',
}

enum Font {
  regular = 'Poppins-Regular',
  light = 'Poppins-Light',
  medium = 'Poppins-Medium',
  semiBold = 'Poppins-SemiBold',
  bold = 'Poppins-Bold',
  extraBold = 'Poppins-ExtraBold',
}

const Size = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,

  xxSmallIcon: 18,
  xSmallIcon: 20,
  smallIcon: 22,
  icon: 24,
  largeIcon: 30,
  xLargeIcon: 34,

  rating: 18,
}

const Shadow = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
}

export { Color, Size, Shadow, Font }
