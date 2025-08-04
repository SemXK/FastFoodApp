import React, { ReactNode } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

interface PrimaryButtonInterface{
  onPress: () => void,
  title: string,
  style?: StyleSheet ,
  leftIcon ?: ReactNode,
  isLoading: boolean
}

const PrimaryButton: React.FC<PrimaryButtonInterface> = ({
  onPress,
  title = "Click Me",
  style,
  leftIcon,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity disabled={isLoading} activeOpacity={.8} className="custom-btn" onPress={onPress}>
      {leftIcon}
      <View className="flex-center flex-row">
        {isLoading ? 
          <ActivityIndicator /> 
          :
          <Text className="text-white-100 paragraph-semibold">{title}</Text>
      }
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton