import cn from "clsx"
import React from 'react'
import { Image, ImageSourcePropType, Text, View } from 'react-native'



interface TabBarIconInterface {
  focused: boolean,
  icon: ImageSourcePropType | undefined,
  title: string
}
const TabBarIcon = ({focused, icon, title}:TabBarIconInterface) => {

  // * Display
  return (
    <View className="tab-icon">
      <Image source={icon} className="size-7" resizeMode="contain" tintColor={focused ? '#FE8C00' : '#5D5F6D'}/>
      <Text className={cn('text-sm font-bold', focused ? 'text-primary' : 'text-stone-8900')}>{title}</Text>
    </View>
  )
}

export default TabBarIcon