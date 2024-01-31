import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './product_row.styles'
import { ProductCard } from '..'
import { useFetch } from '../../hook/useFetch'
import { Color } from '../../constants'

export const ProductRow = () => {
  const { data, isLoading, error, refetchData } = useFetch()

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator 
          size='large'
          color={Color.primary}
        />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ProductCard item={item} />
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.contentContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  )
}
