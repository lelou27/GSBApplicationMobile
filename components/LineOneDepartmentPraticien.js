import React from 'react';
import { View, Text } from 'react-native';

import GlobalStyle from '../assets/Style';
import PropTypes from "prop-types";

/**
 * Classe permettant d'afficher un praticien
 */
export default class LineOneDepartmentPraticien extends React.Component {

    /**
     * affichage du nom / prénom
     * @returns JSX
     */
    nomPrenom() {
        return (
            <Text style={GlobalStyle.oneTextDepartement}>{this.props.praticien.PRA_PRENOM} { this.props.praticien.PRA_NOM }</Text>
        )
    }

    /**
     * Affichage de l'adresse
     * @returns JSX
     */
    adresse() {
        return (
            <Text style={GlobalStyle.oneTextDepartement}>Adresse : { this.props.praticien.PRA_ADRESSE } - { this.props.praticien.PRA_VILLE }</Text>
        )
    }

    /**
     * Affichage du coefficient de notoriété
     * @returns JSX
     */
    coefNotoriete() {
        return (
            <Text style={GlobalStyle.oneTextDepartement}>Coefficient de notoriété : { this.props.praticien.PRA_COEFNOTORIETE }</Text>
        )
    }

    /**
     * Affichage du type de praticien
     * @returns JSX
     */
    typePraticien() {
        return (
            <Text style={GlobalStyle.oneTextDepartement}>
                Ce praticien pratique en { this.props.praticien.TYP_LIEU }, en { this.props.praticien.TYP_LIBELLE }
            </Text>
        )
    }

    /**
     * Rend la vue de ce composant
     * @returns JSX
     */
    render() {
        return (
            <View style={GlobalStyle.viewLineDepartmentPraticien}>
                <Text style={{textAlign: 'center', paddingBottom: 10, fontWeight: 'bold'}}>
                    { this.nomPrenom() }
                </Text>
                { this.adresse() }
                { this.coefNotoriete() }
                <Text style={{paddingBottom: 10, paddingHorizontal: 5}}>
                    { this.typePraticien() }
                </Text>
            </View>
        )
    }

}
// Prototypage de l'argument praticien
LineOneDepartmentPraticien.propTypes = {
    praticien: PropTypes.object
}