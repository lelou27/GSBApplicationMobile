import React from 'react';
import {View, ListView, ActivityIndicator, Text} from 'react-native';
import axios from 'axios';

import config from '../config/config';

import GlobalStyle from '../assets/Style';
import MenuButton from '../components/MenuButton';
import LineCollaborateur  from '../components/lineCollaborateur';

export default class VisiteurScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collaborateurs: null
        };
        this.fetchCollaborateurs();
    }

    fetchCollaborateurs() {
        axios.get(`${config.apiUrl}/collaborateurs`)
            .then((response) => {
                this.setState({ collaborateurs: response.data });
            })
            .catch((error) => {
                this.setState({collaborateurs: 'errCode'});
            })
    }

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

    loadingPage() {
        return (
            <View style={GlobalStyle.container}>
                <MenuButton navigation={this.props.navigation} />
                <ActivityIndicator color={"#a2273C"} size="large"/>
            </View>
        )
    }

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