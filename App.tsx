import '@libs/dayjs';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import { CityProvider } from '@contexts/CityContext';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold });

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <CityProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CityProvider>
    </SafeAreaProvider>
  );
}
