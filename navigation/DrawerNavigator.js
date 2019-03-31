import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import PraticienDepartementsScreen from '../screens/PraticienDepartementsScreen'
import VisiteurScreen from '../screens/VisiteurScreen';
import ResultsOneDepartment from '../screens/ResultsOneDepartment'
import OneCollaborateur from "../components/OneCollaborateur";

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH * 0.70,
    drawerBackgroundColor: '#FFF'
}

const SwitchNavigator = createSwitchNavigator({
    Praticiens: {
        screen: PraticienDepartementsScreen
    },
    ResultsOneDepartment: {
        screen: ResultsOneDepartment
    },
});

const DrawerNavigator = createDrawerNavigator(
    {
        Visiteurs: {
            screen: VisiteurScreen
        },
        Accueil: {
            screen: HomeScreen,
        },
        Praticiens: {
            screen: SwitchNavigator,
        },
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);