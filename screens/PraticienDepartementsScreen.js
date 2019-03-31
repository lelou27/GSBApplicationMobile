import React from 'react';
import {View, Text, ActivityIndicator, ListView } from 'react-native';
import axios from 'axios';

import config from '../config/config';

import MenuButton from '../components/MenuButton';
import GlobalStyle from '../assets/Style';
import LinePraticien from '../components/LinePraticien';

export default class PraticienDepartementsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            report: null,
        }
        this.fetchDepartments();
    }

    fetchDepartments() {
        axios.get(`${config.apiUrl}/departements`)
            .then((response) => {
                this.setState({report: response.data});
            })
            .catch((error) => {
                this.setState({report: 'errCode'});
            })
    }

    showDepartments(ds) {
        return (
            <View>
                <MenuButton navigation={this.props.navigation} />

                <ListView
                    style={GlobalStyle.listViewPraticien}
                    dataSource={ds.cloneWithRows(this.state.report)}
                    renderRow={ (row, j, k) => <LinePraticien department={row} /> }
                />
            </View>
        );
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
        if (this.state.report == null) {
            return (
                this.loadingPage()
            )
        } else if (this.state.report === 'errCode') {
            return (
                this.displayError()
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

            return (
                this.showDepartments(ds)
            )
        }
    }


}