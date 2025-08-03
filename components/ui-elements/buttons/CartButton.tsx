import { images } from '@/constants/assets'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const CartButton = () => {
  const [items, setItems] = useState<any[]>([1, 2, 3])
  return (
    <TouchableOpacity className="cart-btn" onPress={() =>{}}>
      <Image source={images.bag} resizeMode="contain" className="size-6"/>
      {
        items.length > 0 && (
          <View className="cart-badge">
            <Text className="small-bold text-white">{items.length}</Text>
          </View>
        )
      }
    </TouchableOpacity>
  )
}

export default CartButton