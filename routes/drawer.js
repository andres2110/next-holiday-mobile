import { createDrawerNavigator } from "react-navigation-drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from './homeStack'
import FavoriteStack from './favoriteStack'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Favorite: {
        screen: FavoriteStack,
    }
})