import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  // font
  const [loaded] = useFonts({
    "Antonio-Medium": require('./assets/fonts/Antonio-Medium.ttf'),
    "Spartan-Bold": require('./assets/fonts/Spartan-Bold.ttf'),
    "Spartan-Regular": require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!loaded) {
    return <Text>Font is loading...</Text>;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="Details" component={Details} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
