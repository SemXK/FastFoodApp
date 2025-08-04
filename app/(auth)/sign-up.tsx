import PrimaryButton from '@/components/ui-elements/buttons/PrimaryButton'
import CustonTextInput from '@/components/ui-elements/inputs/TextInput'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

const SignUp = () => {

  // * States
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  // & Display States
  const [isLoading, setIsLoading] = useState(false)

  // $ functions
  const handleSignIn = async () => {
    setIsLoading(true)

    if(!name || !email || !password){
      Alert.alert(
        'Error',
        'Please provide all fields!'
      )
    }

    try{

    }
    catch(e){

    }
    finally{
      setIsLoading(false)
    }
  }


  return (
    <View className="flex gap-10  p-5 mt-5 "> 
      <CustonTextInput
        placeholder="Enter your name"
        value={name}
        valueChange={(text) => setName(text as string)}
        label="Username"
      />
      <CustonTextInput
        placeholder="Enter your email"
        value={email}
        valueChange={(text) => setEmail(text as string)}
        label="Email"
      />
      <CustonTextInput
        placeholder="Enter your password"
        value={password}
        valueChange={(text) => setPassword(text as string)}
        label="Password"
        secureTextEntry
      />
      <PrimaryButton
        title="Sign Up"
        onPress={handleSignIn}
        isLoading={isLoading}
      />

      <View className="flex-row justify-center gap-2">
        <Text className="base-regular txt-gray-100">Already have an account?</Text>
        <Link href="/sign-in" className="base-bold text-primary">
          Sign In
        </Link>
      </View>

    </View>
  )
}

export default SignUp