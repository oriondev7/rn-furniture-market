import { View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { styles } from './carousel.styles'
import { Color } from '../../constants'

export const Carousel = ({ width }) => {
  const images = [
    'https://fastly.picsum.photos/id/882/4896/3264.jpg?hmac=k8TP78rWgv5867y7lPCEWOqAjl55VFLs6Uspgi40_ak',
    'https://fastly.picsum.photos/id/625/2507/1674.jpg?hmac=ZuCWygmEqFbv5q0hlD-jimDTtYWRwgAebHLepuXaUUk',
    'https://fastly.picsum.photos/id/163/2000/1333.jpg?hmac=htdHeSJwlYOxS8b0TTpz2s8tD_QDlmsd3JHYa_HGrg8',
  ]

  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        dotColor={Color.primary}
        inactiveDotColor={Color.secondary}
        ImageComponentStyle={styles.image}
        parentWidth={width}
        autoplay
        circleLoop
      />
    </View>
  )
}
