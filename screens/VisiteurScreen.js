import React from 'react';
import {View, ListView, ActivityIndicator, Text} from 'react-native';
import axios from 'axios';

import config from '../config/config';

import GlobalStyle from '../assets/Style';
import MenuButton from '../components/MenuButton';
import LineCollaborateur  from '../components/lineCollaborateur';

/**
 * Display all collaborators
 */
export default class VisiteurScreen extends React.Component {

    /**
     * Constructor / Declare and set state collaborateurs
     * @param props Properties
     */
    constructor(props) {
        super(props);

        this.state = {
            collaborateurs: null
        };
        this.fetchCollaborateurs();
    }

    /**
     * Get all collaborateurs from API
     */
    fetchCollaborateurs() {
        axios.get(`${config.apiUrl}/collaborateurs`)
            .then((response) => {
                this.setState({ collaborateurs: response.data });
            })
            .catch((error) => {
                this.setState({collaborateurs: 'errCode'});
            })
    }

    /**
     * Render for page
     * @param ds DataSource
     * @returns JSX
     */
    displayPage(ds) {
        return (
            <View>
                <MenuButton navigation={this.props.navigation} />

                <ListView
                    style={GlobalStyle.listViewPraticien}
                    dataSource={ds.cloneWithRows(this.state.collaborateurs)}
                    renderRow={ (row, j, k) => <LineCollaborateur collaborateur={row} /> }
                />
            </View>
        )
    }

    /**
     * Loading from datas
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
     * Render errors page
     * @returns JSX
     */
    displayError() {
        return (
            <View style={GlobalStyle.container}>
                <MenuButton navigation={this.props.navigation} />
                <Text style={GlobalStyle.text}>
                    Désolé, une erreur s'est produite. Veuillez réessayer plus tard
                </Text>
            </View>
        )
    }

    /**
     * Render for this page
     * @returns {JSX}
     */
    render() {
        if (this.state.collaborateurs === null) {
            return (
                this.loadingPage()
            )
        } else if (this.state.collaborateurs === 'errCode') {
            return (
                this.displayError()
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

            return (
                this.displayPage(ds)
            )
        }
    }
}