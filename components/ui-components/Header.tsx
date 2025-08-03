import { images } from '@/constants/assets'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CartButton from '../ui-elements/buttons/CartButton'

const Header = () => {
  return (
    <View className="flex-between flex-row ">
      <View className="">
        <Text className="small-bold text-primary">Header</Text>
        <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5 items-center">
          <Text className="paragraph-bold text-dark-100">Croatia</Text>
          <Image source={images.arrowDown} className="size-2"/>
        </TouchableOpacity>
      </View>
      <View className="Flex-end">
        <CartButton />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})