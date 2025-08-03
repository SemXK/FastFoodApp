import { Slot } from 'expo-router'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export class AuthLayout extends Component {
  render() {
    return (
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    )
  }
}

export default AuthLayout