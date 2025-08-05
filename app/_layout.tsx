import useAuthStore from '@/store/auth.store';
import * as Sentry from '@sentry/react-native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';
import './global.css';

Sentry.init({
  dsn: 'https://fc10da385a95ebcb16ab8d9b633a9d1f@o4509788237332480.ingest.de.sentry.io/4509788238381136',
  sendDefaultPii: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],
});

export default Sentry.wrap(function RootLayout() {

  // * Globals
  const [fontLoaded, fontError] = useFonts({
    "QuickSand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "QuickSand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "QuickSand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "QuickSand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "QuickSand-Light": require('../assets/fonts/Quicksand-Light.ttf'),
  });

  // $ Context
  const {isLoading, fetchAuthenticatedUser} = useAuthStore();

  // % useEffects
  useEffect(() => {
    if(fontError) throw fontError
    if(fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError])

  useEffect(() => {
    fetchAuthenticatedUser()
  }, [])

  if (!fontLoaded || isLoading) {
    return null;
  }
  
  return (
    <Stack   screenOptions={{headerShown:false}}/>
  );
});