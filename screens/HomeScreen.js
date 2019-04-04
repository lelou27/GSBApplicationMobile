import React from 'react'
import {View, Text } from 'react-native'

import GlobalStyle from '../assets/Style'

import MenuButton from '../components/MenuButton'

/**
 * Home page
 */
export default class HomeScreen extends React.Component {
    /**
     * Render view to Home
     * @returns JSX
     */
    render() {
        return (
            <View style={GlobalStyle.container}>
                <MenuButton navigation={this.props.navigation} />
                <Text style={GlobalStyle.text}>
                    Bienvenue dans l'application mobile GSB. Dans cette application,
                    vous pourrez voir les praticiens classés par département, ainsi que des informaations sur les collaborateurs de GSB.
                </Text>
            </View>
        );
    }
}