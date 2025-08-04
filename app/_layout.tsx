import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';
import './global.css';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://fc10da385a95ebcb16ab8d9b633a9d1f@o4509788237332480.ingest.de.sentry.io/4509788238381136',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export default Sentry.wrap(function RootLayout() {
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
    <Stack   screenOptions={{headerShown:false}}/>
  );
});