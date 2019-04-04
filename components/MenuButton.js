import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import GlobalStyle from '../assets/Style'

/**
 * Classe rendant le bouton de menu
 */
export default class MenuButton extends React.Component {
    /**
     * Rendu du bouton
     * @returns JSX
     */
    render() {
        return (
            <Ionicons
                name="md-menu"
                color="#000000"
                size={35}
                style={GlobalStyle.menuIcon}
                onPress={ () => this.props.navigation.toggleDrawer() }
            />
        );
    }
}