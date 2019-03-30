import React from 'react';
import {View, Text, ActivityIndicator, ListView, Button} from 'react-native';
import axios from 'axios';

import GlobalStyle from '../assets/Style'
import MenuButton from "../components/MenuButton";
import LineOneDepartmentPraticien from '../components/LineOneDepartmentPraticien';

import { withNavigation } from 'react-navigation';

class ResultsOneDepartment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            praticiens: null
        }
        this.fetchPraticiens();
    }

    pressReturn() {
        this.props.navigation.navigate('Praticiens');
    }


    fetchPraticiens() {
        const { navigation } = this.props;
        let codeDepartment = navigation.getParam('code', 'errCode');
        if (codeDepartment !== 'errCode') {
            axios.get(`http://192.168.43.66:8888/public/departement/praticien/${codeDepartment}`)
                .then((response) => {
                    this.setState({ praticiens: response.data});
                })
                .catch((error) => {
                    this.setState({ praticiens: 'errCode'});
                })
        }
    }

    loadingRender() {
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
                    Désolé, il n'y a aucun de praticien dans ce departement
                </Text>
                <Button color="#03A9F4" title="Retour" onPress={() => this.pressReturn()} />
            </View>
        )
    }

    showOneDepartment(ds) {
        return (
            <View>
                <MenuButton navigation={this.props.navigation} />

                <ListView
                    style={GlobalStyle.listViewPraticien}
                    dataSource={ds.cloneWithRows(this.state.praticiens)}
                    renderRow={ (row, j, k) => <LineOneDepartmentPraticien praticien={row} />}
                />
                <Button color="#03A9F4" title="Retour" onPress={() => this.pressReturn()} />
            </View>
        )
    }

    render() {
        if (this.state.praticiens == null) {
            return (
                this.loadingRender()
            )
        } else if (this.state.praticiens == 'errCode') {
            return (
                this.displayError()
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

            return (
                this.showOneDepartment(ds)
            )
        }
    }
}

export default withNavigation(ResultsOneDepartment);