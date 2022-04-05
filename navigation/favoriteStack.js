import { createStackNavigator } from "react-navigation-stack";
import Header from "../components/commons/Header";
import { HEADER_STYLE } from "../resources/global_style";
import Favorites from "../screens/Favorites";
import HolidayDetails from '../screens/HolidayDetails';

const fnHeaderNavigation = ({navigation}) => {
    return {
        headerTitle: () => <Header navigation = {navigation}/>
    }
} 
const screens = {
    Favorites: {
        screen: Favorites,
        navigationOptions: fnHeaderNavigation
    },
    HolidayDetails:{
        screen: HolidayDetails,
    }
}

const FavoriteStack = createStackNavigator(screens, HEADER_STYLE)

  export default FavoriteStack;