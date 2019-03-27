import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import PraticienDepartementsScreen from '../screens/PraticienDepartementsScreen'

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH * 0.70,
    drawerBackgroundColor: '#FFF'
}

const DrawerNavigator = createDrawerNavigator(
    {
        Accueil: {
            screen: HomeScreen,
        },
        Praticiens: {
            screen: PraticienDepartementsScreen,
        },
    },
    DrawerConfig
)

export default createAppContainer(DrawerNavigator);