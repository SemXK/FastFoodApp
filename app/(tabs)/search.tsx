import SearchItem from '@/components/detail-components/SearchItem'
import SearchBar from '@/components/ui-components/SearchBar'
import SlidableFilter from '@/components/ui-components/SlidableFilter'
import CartButton from '@/components/ui-elements/buttons/CartButton'
import useAppwrite from '@/hooks/useAppwrite'
import { getCategories, getMenu } from '@/lib/appwrite'
import cn from "clsx"
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const limit = 6

const Search = () => {
  // & Query hooks
  const {category, query} = useLocalSearchParams<{query?:string, category?: string}>()

  // & Custom Hooks
  const { data:menus, refetch, loading } = useAppwrite({
    fn: getMenu,
    params:{
      category,
      query,
      limit
    }
  });
  const {data:categories} = useAppwrite({
    fn:getCategories
  });

  // * Lifecycle
  useEffect(() => {
    refetch({category, query, limit})
  }, [category, query])

  // * Display
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        keyExtractor={item => item.$id}
        numColumns={2}
        columnWrapperClassName='gap-7'
        contentContainerClassName='gap-7 px-5 pb-32'
        data={menus?.documents as any}
        ListHeaderComponent={() => (
          <View className="my-5 gap-5">
            <View className="flex-between flex-row w-full ">
              <View className="flex-start">
                <Text className='small-bold uppercase text-primary'>Search</Text>
                <View>
                  <Text className="paragraph-semibold text-dark-100" >Find your favourite food</Text>
                </View>
              </View>
              <CartButton />
            </View>
            <SearchBar />
            <SlidableFilter categories={categories?.documents}/>
          </View>
          
        )}
        ListEmptyComponent={() => (
          <View className="flex-between">
            <Text>No items found</Text>
          </View>
        )}
        renderItem={({item, index}) => {
          const itemEven = (index % 2) === 0;


          return(
          <View key={item.$id} className={cn("flex-1 max-w-[48%]", !itemEven ? 'mt-10' : 'mt-0')}>
            <SearchItem item={item}/>
          </View>
        )}
        }
      />

    </SafeAreaView>
  )
}

export default Search 