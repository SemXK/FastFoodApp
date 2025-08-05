import TabBarIcon from '@/components/ui-components/TabBarIcon';
import { images } from '@/constants/assets';
import useAuthStore from '@/store/auth.store';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';



export default function TabLayout() {

  // $ Context
  const {isAuthenticated} = useAuthStore();

  // * display
  if(!isAuthenticated) return <Redirect href="/sign-in"/>
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle:{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          height: 80,
          position: "absolute",
          bottom: 10,
          backgroundColor: "white",
          shadowColor:'#1a1a1a',
          shadowOffset:{width:0, height:2},
          shadowOpacity: 0.1,
          shadowRadius:4,
          elevation: 4
        }
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({focused}) => <TabBarIcon focused={focused} title="Home" icon={images.home}/>
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({focused}) => <TabBarIcon focused={focused} title="Search" icon={images.search}/>
        }}
      />
      <Tabs.Screen 
        name="cart"
        options={{
          headerShown: false,
          title: "Cart",
          tabBarIcon: ({focused}) => <TabBarIcon focused={focused} title="Cart" icon={images.bag}/>
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({focused}) => <TabBarIcon focused={focused} title="Profile" icon={images.person}/>
        }}
      />
    </Tabs>
  )
}
