import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons'

import GlobalStyle from '../assets/Style';

import { withNavigation } from 'react-navigation';

/**
 * Classe permettant d'afficher une ligne de département
 */
class LinePraticien extends React.Component {
    /**
     * Affichage du département (code)
     * @returns JSX
     */
    code() {
        return (
            <Text>{ this.props.department.code }</Text>
        )
    }

    /**
     * Affichage du département (nom)
     * @returns JSX
     */
    nom() {
        return (
            <Text>{ this.props.department.nom }</Text>
        )
    }

    /**
     * Rendu à la vue
     * @returns JSX
     */
    render() {
        return (
            <View style={GlobalStyle.linePraticien}>
                <Text style={GlobalStyle.textPraticien}>
                    { this.code() }  -  { this.nom() }
                </Text>
                <Ionicons
                    style={GlobalStyle.IconView}
                    name="md-arrow-round-forward"
                    size={30}
                    onPress={() => this.props.navigation.navigate(
                                                    'ResultsOneDepartment',
                                                { code: this.props.department.code }
                                                ) }
                />
            </View>
        )

    }
}
// Prototypage de l'objet LinePraticien
LinePraticien.propTypes = {
    department: PropTypes.object
}
// Export avec navigation
export default withNavigation(LinePraticien);
