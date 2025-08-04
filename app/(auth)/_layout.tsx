import { images } from '@/constants/assets'
import { Slot } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

const AuthLayout = () =>  {

  return (
    <KeyboardAvoidingView   behavior={Platform.OS !== 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardShouldPersistTaps="handled" className=''>
        <View 
          className="w-full relative mb-10" 
          style={{
            height: Dimensions.get('screen').height / 2.25
          }}
          >
            <ImageBackground 
              source={images.loginGraphic}
              className="size-full rounded-b-lg"  
              resizeMode='stretch'
            />
            <Image 
              source={images.logo}
              className="self-center size-48 absolute -bottom-16"
            />
        </View>
        
        <Slot />  
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AuthLayout