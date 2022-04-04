import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './homeStack'
import FavoriteStack from './favoriteStack'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            drawerIcon: () => <Entypo name="home" size={24} color="white" />
        }
    },
    Favorites: {
        screen: FavoriteStack,
        navigationOptions: {
            drawerIcon: () => <AntDesign name="star" size={24} color="yellow" />,
        }
    }
}, {
    drawerBackgroundColor: '#92dccd',
    contentOptions: {
        inactiveTintColor: 'white',
        activeTintColor: 'black',
        labelStyle: {
            fontFamily: 'Nunito_400Regular',
        }
    }
})

export default createAppContainer(RootDrawerNavigator)