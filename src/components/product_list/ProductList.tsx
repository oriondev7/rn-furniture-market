import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import { useFetch } from '../../hook/useFetch'
import { styles } from './product_list.styles'
import { Color } from '../../constants'
import { ProductCard } from '..'

export const ProductList = () => {
  const { data, isLoading, error } = useFetch()

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Color.primary} />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Something went wrong</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={styles.separator}
        columnWrapperStyle={{ columnGap: 16 }}
      />
    </View>
  )
}
