import { images } from '@/constants/assets'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Image, Platform, TextInput, TouchableOpacity, View } from 'react-native'
import { useDebouncedCallback } from 'use-debounce'
const SearchBar = () => {

  // & Hooks
  const params = useLocalSearchParams()
  const debouncedSearch = useDebouncedCallback(
    (text:string) => router.setParams({query: text}),
    500
  )


  // % States
  const [query, setQuery] = useState(params.query)

  // £ functions
  const handleSearch = (text:string) => {
    setQuery(text)
    debouncedSearch(text)
  }
  // * Display
  return (
    <View className="searchbar"
      style={Platform.OS === 'android' ? {elevation: 5, shadowColor: "#878787"} : ""}
    >
      <TextInput
        className="flex-1 p-5"
        placeholder="What do you want to eat?"
        value={query}
        onChangeText={handleSearch}
        placeholderTextColor={"#A0A0A0"}
      />
      <TouchableOpacity className="pr-5" onPress={() => {}}>
        <Image 
          source={images.search}
          className="size-6"
          resizeMode='contain'
          tintColor="#a0a0a0" 
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar