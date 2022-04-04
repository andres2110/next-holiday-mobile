import { createStackNavigator } from "react-navigation-stack";
import Header from "../components/commons/Header";
import { HEADER_STYLE } from "../resources/constants";
import Favorites from "../screens/Favorites";

const fnHeaderNavigation = ({navigation}) => {
    return {
        headerTitle: () => <Header navigation = {navigation}/>
    }
} 
const screens = {
    Favorites: {
        screen: Favorites,
        navigationOptions: fnHeaderNavigation
    }
}

const FavoriteStack = createStackNavigator(screens, HEADER_STYLE)

  export default FavoriteStack;