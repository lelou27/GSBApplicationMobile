import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyle from "../assets/Style";
import { Ionicons } from '@expo/vector-icons'
import {withNavigation} from "react-navigation";

// Classe permettant d'afficher une ligne de collaborateur
class lineCollaborateur extends React.Component {
    /**
     * Affichage du nom / prénom du collaborateur
     * @returns JSX affichage
     */
    nomPrenom() {
        return (
            <Text>{ this.props.collaborateur.COL_PRENOM } { this.props.collaborateur.COL_NOM }</Text>
        )
    }

    /**
     * Affichage du labo
     * @returns JSX affichage
     */
    labo() {
        return (
            <Text>Laboratoire : { this.props.collaborateur.LAB_NOM }</Text>
        )
    }

    /**
     * Rendu de la vue
     * @returns JSX
     */
    render() {
        return (
            <View style={GlobalStyle.viewLineDepartmentPraticien}>
                <Text style={{textAlign: 'center', paddingBottom: 10, fontWeight: 'bold'}}>
                    { this.nomPrenom() }
                </Text>
                <Text style={{paddingBottom: 10, paddingHorizontal: 5}}>
                    { this.labo() }
                </Text>
                <Ionicons
                    style={{textAlign: 'right', paddingBottom: 3, paddingRight: 3}}
                    name="md-information-circle-outline"
                    size={30}
                    color="#03A9F4"
                    onPress={() => this.props.navigation.navigate(
                        'OneVisiteur',
                        { matricule: this.props.collaborateur.COL_MATRICULE }
                    )}
                />
            </View>
        );
    }
}
// Permet d'utiliser la navigation pour this.props.navigation
export default withNavigation(lineCollaborateur);