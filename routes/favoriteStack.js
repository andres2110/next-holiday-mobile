import { createStackNavigator } from "react-navigation-stack";
import Header from "../components/Header";
import Favorite from "../screens/Favorite";

const fnHeaderNavigation = ({navigation}) => {
    return {
        headerTitle: () => <Header navigation = {navigation}/>
    }
} 
screens = {
    Home: {
        screen: Favorite,
        navigationOptions: fnHeaderNavigation
    }
}

const HomeStack = createStackNavigator(screens)