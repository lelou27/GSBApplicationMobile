import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons'

import GlobalStyle from '../assets/Style';

import { withNavigation } from 'react-navigation';



class LinePraticien extends React.Component {

    code() {
        return (
            <Text>{ this.props.department.code }</Text>
        )
    }

    nom() {
        return (
            <Text>{ this.props.department.nom }</Text>
        )
    }

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

LinePraticien.propTypes = {
    department: PropTypes.object
}

export default withNavigation(LinePraticien);
