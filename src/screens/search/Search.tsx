import {
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  Text,
} from 'react-native'
import React, { useState } from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { styles } from './search.styles'
import { APIDomain, Color, Icon, Size } from '../../constants'
import axios from 'axios'
import { SearchTile } from '../../components'
import { ProductsModel } from '../../models'

export const Search = () => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState<ProductsModel[]>([])
  const [didPressSearch, setDidPressSearch] = useState(false)

  const onSearch = async () => {
    try {
      const response = await axios.get(
        `${APIDomain.local}/api/products/search/${searchKey}`
      )
      setSearchResults(response.data)
      setDidPressSearch(true)
    } catch (error) {
      console.log('failed to get products', error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <IonIcon
            name={Icon.camera}
            size={Size.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            onPressIn={() => {}}
            placeholder="Black Sofa"
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
            <FeatherIcon
              name={Icon.search}
              size={Size.icon}
              color={Color.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 && didPressSearch ? (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../../assets/images/seven.jpg')}
            style={styles.emptyResultsImage}
          />
          <Text style={styles.emptyResultsText}>No results found.</Text>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
        />
      )}
    </SafeAreaView>
  )
}
