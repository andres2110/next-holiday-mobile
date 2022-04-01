import { createStackNavigator } from "react-navigation-stack";
import Header from "../components/Header";
import Home from '../screens/Home'

const fnHeaderNavigation = ({navigation}) => {
    return {
        headerTitle: () => <Header navigation = {navigation}/>
    }
} 
screens = {
    Home: {
        screen: Home,
        navigationOptions: fnHeaderNavigation
    }
}

const HomeStack = createStackNavigator(screens)