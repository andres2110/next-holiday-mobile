import React from 'react'
import Header from "../components/commons/Header";
import Home from '../screens/Home'
import { createStackNavigator } from "react-navigation-stack";
import { HEADER_STYLE } from "../resources/constants";

const fnHeaderNavigation = ({navigation}) => {
    return {
        headerTitle: () => <Header navigation = {navigation}/>
    }
} 
const screens = {
    Home: {
        screen: Home,
        navigationOptions: fnHeaderNavigation
    }
}

const HomeStack = createStackNavigator(screens,HEADER_STYLE)

  export default HomeStack;