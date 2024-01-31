import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './new_arrivals.styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Color, Icon, Size } from '../../constants'
import { ProductList } from '../../components'
import { useNavigation } from '@react-navigation/native'

export const NewArrivals = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcon
              name={Icon.navigationLeft}
              size={Size.largeIcon}
              color={Color.lightWhite}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Products</Text>
        </View>

        <ProductList />
      </View>
    </SafeAreaView>
  )
}
