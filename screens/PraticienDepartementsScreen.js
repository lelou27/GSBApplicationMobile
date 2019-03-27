import React from 'react'
import { View, Text } from 'react-native'

import GlobalStyle from '../assets/Style'

export default class PraticienDepartementsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            report: null
        }
    }

    render() {
        return (
            <View style={GlobalStyle.container}>
                <Text style={GlobalStyle.text}>OK !</Text>
            </View>
        )
    }


}