import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import PraticienDepartementsScreen from '../screens/PraticienDepartementsScreen'
import VisiteurScreen from '../screens/VisiteurScreen';
import ResultsOneDepartment from '../screens/ResultsOneDepartment'
import OneCollaborateur from "../components/OneCollaborateur";
// Récupération des dimensions
const WIDTH = Dimensions.get('window').width;
// Configuration du panneau
const DrawerConfig = {
    drawerWidth: WIDTH * 0.70,
    drawerBackgroundColor: '#FFF'
}
// Création d'une navigation pour les praticiens
const SwitchNavigator = createSwitchNavigator({
    Praticiens: {
        screen: PraticienDepartementsScreen
    },
    ResultsOneDepartment: {
        screen: ResultsOneDepartment
    },
});
// Création d'une navigation pour les visiteurs
const VisiteurSwitchNavigator = createSwitchNavigator({
    Visiteurs: {
        screen: VisiteurScreen
    },
    OneVisiteur: {
        screen: OneCollaborateur
    }
});
// Création d'une navigation principale
const DrawerNavigator = createDrawerNavigator(
    {
        Accueil: {
            screen: HomeScreen,
        },
        Praticiens: {
            screen: SwitchNavigator,
        },
        Visiteurs: {
            screen: VisiteurSwitchNavigator
        },
    },
    DrawerConfig
);
// Export de la navigation
export default createAppContainer(DrawerNavigator);