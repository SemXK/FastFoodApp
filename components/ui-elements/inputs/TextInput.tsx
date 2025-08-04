import { Colors } from '@/constants/Colors';
import cn from 'clsx';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

interface TextInputInterface {
  placeholder:string,
  value: string | number,
  valueChange: (arg: string | number) => void,
  label: string,
  secureTextEntry?: boolean,
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
}

const CustonTextInput = ({
  placeholder='Enter text',
  value,
  valueChange,
  label,
  secureTextEntry = false,
  keyboardType = "default"
}: TextInputInterface) => {

  // * States
  const [isFocused, setIsFocused] = useState(false)
  // * Display
  return (
    <View className="w-full">
      <Text className="label">{label}</Text>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        value={value as string}
        onChangeText={valueChange}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => {setIsFocused(true)}}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={Colors.light.text }
        className={cn('input', isFocused ? 'border-primary' : 'border-gray-100')}
      />
    </View>
  )
}

export default CustonTextInput