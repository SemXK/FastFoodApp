import { images } from '@/constants/assets'
import { useCartStore } from '@/store/cart.store'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const CartButton = () => {

  // & Hooks
  const {getTotalItems} = useCartStore()
  const totalItems = getTotalItems()
  
  // * Display
  return (
    <TouchableOpacity className="cart-btn" onPress={() =>{}}>
      <Image source={images.bag} resizeMode="contain" className="size-6"/>
      {
        totalItems > 0 && (
          <View className="cart-badge">
            <Text className="small-bold text-white">{totalItems}</Text>
          </View>
        )
      }
    </TouchableOpacity>
  )
}

export default CartButton