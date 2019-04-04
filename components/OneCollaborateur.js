import React from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';

import axios from 'axios';
import PropTypes from 'prop-types';
import GlobalStyle from "../assets/Style";
import MenuButton from "./MenuButton";
import Config from '../config/config';
import Moment from 'moment';

/**
 * Classe permettant de rendre la vue d'un collaborateur
 */
export default class OneCollaborateur extends React.Component {
    /**
     * Constructeur de l'application
     * @param props les propriétés
     */
    constructor(props) {
        super(props);
        // Déclaration du cillaborateur
        this.state = {
            collaborateur: null
        }
        // Récupération d'un collaborateur
        this.fetchCollaborateur();
    }

    /**
     * Récupération d'un collaborateur via API et SET du collaborateur
     */
    fetchCollaborateur() {
        const { navigation } = this.props;
        let matricule = navigation.getParam('matricule', 'errCode');

        if (matricule !== 'errCode') {
            axios.get(`${Config.apiUrl}/collaborateur/${matricule}`)
                .then((response) => {
                    this.setState({ collaborateur: response.data });
                })
                .catch((error) => {
                    this.setState({collaborateur: 'errCode'});
                })
        } else {
            this.setState({collaborateur: 'errCode'});
        }
    }

    /**
     * Appui sur retour
     */
    pressReturn() {
        this.props.navigation.navigate('Visiteurs');
    }

    /**
     * Page de chargement
     * @returns JSX
     */
    loadingPage() {
        return (
            <View style={GlobalStyle.container}>
                <MenuButton navigation={this.props.navigation} />
                <ActivityIndicator color={"#a2273C"} size="large"/>
            </View>
        )
    }

    /**
     * Rendu des erreurs
     * @returns JSX
     */
    displayError() {
        return (
            <View style={GlobalStyle.container}>
                <MenuButton navigation={this.props.navigation} />
                <Text style={GlobalStyle.text}>
                    Désolé, une erreur s'est produite. Veuillez réessayer plus tard
                </Text>
                <Button color="#03A9F4" title="Retour" onPress={() => this.pressReturn()} />
            </View>
        )
    }

    /**
     * Rendu de la page
     * @returns JSX
     */
    displayPage() {
        return (
            <View>
                <MenuButton navigation={this.props.navigation} />
                <View style={{marginTop: 70}}>
                    <Text style={[GlobalStyle.underViewOneCollab, {fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginBottom: 20}]}>{this.state.collaborateur.COL_PRENOM} {this.state.collaborateur.COL_NOM}</Text>
                    <Text style={GlobalStyle.underViewOneCollab}>Adresse : {this.state.collaborateur.COL_ADRESSE}</Text>
                    <Text style={GlobalStyle.underViewOneCollab}>Code postal : {this.state.collaborateur.COL_CP}</Text>
                    <Text style={GlobalStyle.underViewOneCollab}>Ville : {this.state.collaborateur.COL_VILLE}</Text>
                    <Text style={GlobalStyle.underViewOneCollab}>Date d'embauche : {Moment(this.state.collaborateur.COL_DATEEMBAUCHE).format('DD/MM/YYYY')}</Text>
                    <Text style={[GlobalStyle.underViewOneCollab, {marginBottom: 30}]}>Laboratoire : {this.state.collaborateur.LAB_NOM}, ayant pour chef {this.state.collaborateur.LAB_CHEFVENTE}</Text>
                    <Button color="#03A9F4" title="Retour" onPress={() => this.pressReturn()} />
                </View>
            </View>
        )
    }

    /**
     * Rendu de la vue
     * @returns {JSX}
     */
    render() {
        if (this.state.collaborateur === null) {
            return (
                this.loadingPage()
            )
        } else if (this.state.collaborateur === 'errCode') {
            return (
                this.displayError()
            )
        } else {
            return (
                this.displayPage()
            )
        }
    }
}

// Prototupage du matricule
OneCollaborateur.propTypes = {
    matricule: PropTypes.string
}