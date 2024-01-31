import { View, Image, TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import { styles } from './search_tile.styles'
import { useNavigation } from '@react-navigation/native'
import { ScreenName } from '../../constants'
import { SearchTileProps } from './search_tile.types'

export const SearchTile: FC<SearchTileProps> = ({ item }) => {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate(ScreenName.productDetails, { item })}
      >
        <View style={styles.productContainer}>
          <Image source={{ uri: item.imageURL }} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.supplier}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
