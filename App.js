import AppLoading from 'expo-app-loading'
import Navigator from './navigation/drawer'
import { useFonts, Nunito_400Regular,Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  let [fontsLoaded] = useFonts({ Nunito_400Regular,Nunito_700Bold });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );

}