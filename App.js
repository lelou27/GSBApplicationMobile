import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {createAppContainer, createDrawerNavigator} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import VisiteurScreen from "./screens/VisiteurScreen";

StatusBar.setHidden(true, 'slide');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
