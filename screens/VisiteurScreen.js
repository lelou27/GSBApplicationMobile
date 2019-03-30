import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'

import GlobalStyle from '../assets/Style'
import MenuButton from '../components/MenuButton'

export default class VisiteurScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <MenuButton navigation={this.props.navigation}/>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam nesciunt voluptatum? Aliquam, dignissimos quas. Culpa dolore dolorem ea earum excepturi fugit, quam repellendus sit tempora vero. Minus rem, totam!
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam nesciunt voluptatum? Aliquam, dignissimos quas. Culpa dolore dolorem ea earum excepturi fugit, quam repellendus sit tempora vero. Minus rem, totam!
                </Text>
            </View>
        )
    }

}