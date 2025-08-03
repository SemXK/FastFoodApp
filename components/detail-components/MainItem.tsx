import { images } from '@/constants/assets';
import cn from 'clsx';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface MainItemInterface {
  item: {
    id: number;
    title: string;
    image: any;
    color: string;
  },
  iterationIndex: number
}

const MainItem = ({item, iterationIndex}: MainItemInterface) => {
  const evenElement = !!(iterationIndex  % 2)
  return (
    <Pressable 
      className={cn("offer-card ", ( evenElement ? 'flex-row' : 'flex-row-reverse'))}
      style={{backgroundColor: item.color}}
      >
        {({pressed}) => (
          < >
            <View className="h-full w-1/2">
              <Image 
                source={item.image} 
                className="size-full" 
                resizeMode="contain"
              />
            </View>

            <View className="h-full w-1/2 p-2 offer-card__info">
              <Text className="h1-bold text-white leading-tight">
                {item.title}
              </Text>
              <Image 
                className={cn("size-10")}
                source={images.arrowRight} 
                resizeMode="contain"
              />
            </View>
          </>
        )}
    </Pressable>
  )
}

export default MainItem

const styles = StyleSheet.create({})