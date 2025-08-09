import React from 'react'
import { Image, Platform, Text, TouchableOpacity } from 'react-native'

interface SearchItemInterface {
  name: string,
  description: string,
  image_url: any,
  price: number
}
const SearchItem = ({
  item
}: any) => {
  // * Display
  return (
    <TouchableOpacity 
      className="menu-card" 
      activeOpacity={.7} 
      style={Platform.OS == "android" ? {elevation: 10, shadowColor: "#878787"} : ""}>
      <Image source={{uri:item.image_url}} className="size-32 " resizeMode="contain"/>
      <Text className='text-center base-bold text-dark-100' numberOfLines={1}>{item.name}</Text>
      <Text className='body-regular text-gray-200 mb-4' numberOfLines={1}>From €{item.price}</Text>
      <TouchableOpacity>
        <Text className="paragraph-bold text-primary">Add to Cart +</Text>
      </TouchableOpacity>

    </TouchableOpacity>
  )
}

export default SearchItem