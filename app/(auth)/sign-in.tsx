import PrimaryButton from '@/components/ui-elements/buttons/PrimaryButton'
import CustonTextInput from '@/components/ui-elements/inputs/TextInput'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

const SignIn = () => {

  // * States
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  // & Display States
  const [isLoading, setIsLoading] = useState(false)

  // $ functions
  const handleSignIn = async () => {
    if(!email || !password){
      Alert.alert(
        'Insert Email and Password',
        
      )
    }
  }


  return (
    <View className="flex gap-10  p-5 mt-5"> 
      <CustonTextInput
        placeholder="Enter your email"
        value={email}
        valueChange={(text) => setEmail(text as string)}
        label="Username"
      />
      <CustonTextInput
        placeholder="Enter your password"
        value={password}
        valueChange={(text) => setPassword(text as string)}
        label="Password"
        secureTextEntry
      />
      <PrimaryButton
        title="Sign In"
        onPress={handleSignIn}
        isLoading={isLoading}
      />

      <View className="flex-row justify-center gap-2">
        <Text className="base-regular txt-gray-100">Don&apos;t have an account?</Text>
        <Link href="/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>

    </View>
  )
}

export default SignIn