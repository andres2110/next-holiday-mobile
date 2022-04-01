import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AppLoading  from 'expo-app-loading'
import { useFonts,  Nunito_400Regular} from '@expo-google-fonts/nunito';

// const getFont = () => Font.loadAsync({
//   'nunito-regular': 
// })

export default function App() {
  let [fontsLoaded] = useFonts({ Nunito_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Header />
      <Text> </Text>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
