import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';
import './global.css';

export default function RootLayout() {
  const [fontLoaded, fontError] = useFonts({
    "QuickSand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "QuickSand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "QuickSand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "QuickSand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "QuickSand-Light": require('../assets/fonts/Quicksand-Light.ttf'),

  });

  useEffect(() => {
  if(fontError) throw fontError
  if(fontLoaded) {
    SplashScreen.hideAsync();
  }
  }, [fontLoaded, fontError])

  if (!fontLoaded) {
    return null;
  }
  
  return (
    <Stack screenOptions={{headerShown:false}}/>
  );
}
