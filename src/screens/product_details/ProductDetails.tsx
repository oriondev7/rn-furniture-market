import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './product_details.styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import SLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import { Color, Icon, Size } from '../../constants'

export const ProductDetails = ({ navigation, route }: any) => {
  const { item } = route.params
  const [count, setCount] = useState(1)

  const incrementCount = () => {
    if (count < 99) setCount(count + 1)
  }

  const decrementCount = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IonIcon name={Icon.navigationLeft} size={Size.largeIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <IonIcon
            name={Icon.pdRightCornerIcon}
            size={Size.largeIcon}
            color={Color.primary}
          />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: item.imageURL }} style={styles.image} />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
              <IonIcon
                key={index}
                name={Icon.rating}
                size={Size.icon}
                color={Color.systemGold}
              />
            ))}

            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={styles.countContainer}>
            <TouchableOpacity onPress={incrementCount}>
              <SLineIcon name={Icon.increment} size={Size.xSmallIcon} />
            </TouchableOpacity>

            <Text style={styles.countText}>{count}</Text>

            <TouchableOpacity onPress={decrementCount}>
              <SLineIcon name={Icon.decrement} size={Size.xSmallIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationWrapper}>
            <View style={styles.location}>
              <IonIcon name={Icon.location} size={Size.xSmallIcon} />

              <Text> {item.product_location}</Text>
            </View>

            <View style={styles.location}>
              <MCIcon name={Icon.delivery} size={Size.xSmallIcon} />

              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartButton}>
            <Text style={styles.cartButtonTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addToCart}>
            <FontistoIcon
              name={Icon.addToCart}
              size={Size.smallIcon}
              color={Color.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
