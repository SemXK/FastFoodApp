import cn from "clsx"
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Platform, Text, TouchableOpacity } from 'react-native'

const SlidableFilter = ({categories}:any) => {

  // & Query Hooks
  const searchParams = useLocalSearchParams()

  // % States
  const [active, setActive] = useState(searchParams.category || "")
  const filterData = (categories ?
    [{id: 'all', name: 'All'}, ...categories] 
    :
    [{id: 'all', name: 'All'}] 
  )

  // £ functions
  const handlePress = (id:string) => {
    setActive(id)

    if(id === 'all') router.setParams({category:undefined})
    else router.setParams({category:id})
  }


  // * Display
  return (
    <FlatList
      keyExtractor={item => item.$id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName='gap-x-2 pb-3'
      data={filterData}
      renderItem={({item, index}) => (
        <TouchableOpacity 
        onPress={() => handlePress(item.$id)}
          className={cn("filter", active === item.$id ? 'bg-primary' : 'bg-white')}
          style={Platform.OS === 'android' ? {elevation: 5, shadowColor: "#878787"} : ""}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )

      }
    />

  )
}

export default SlidableFilter