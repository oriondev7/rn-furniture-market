import { TouchableOpacity, View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './product_card.styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Color, Icon, ScreenName, Size } from '../../constants'
import { ProductCardProps } from './product_card.types'

export const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenName.productDetails, { item })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageURL }} style={styles.image} />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.supplier} numberOfLines={1}>
            {item.supplier}
          </Text>

          <Text style={styles.price}>${item.price}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <IonIcon
            name={Icon.addCircle}
            size={Size.xLargeIcon}
            color={Color.primary}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
