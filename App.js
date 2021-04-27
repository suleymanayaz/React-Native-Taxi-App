import React, {Component} from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Button,Dimensions} from 'react-native'
import {ActionSheet,Root} from "native-base";
import MapView from 'react-native-maps';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Sorgu1 from './Sorgu1'
import Mobil_Sorgular from './MobilSorgular'
import Sorgu2 from './Sorgu2'
import Sorgu3 from './Sorgu3'
import GoogleMaps from './GoogleMaps'


const RootStack = createStackNavigator(

 {
  Mobil_Sorgular: Mobil_Sorgular,
  Tip1: Sorgu1,
  Tip2: Sorgu2,
  Tip3: Sorgu3,
  Google_Map:GoogleMaps
 },
 {
  initialRouteName: 'Mobil_Sorgular',
 }
);
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
constructor(props){
       super(props);
       global.token ='Bearer XXXXXXXXXXXXXXXX';
       global.jobId1='XXXXXXXXXXXXXXXXXXXXXXX';
       global.jobId2='XXXXXXXXXXXXXXXXXXXXXXX';
       global.jobId3='XXXXXXXXXXXXXXXXXXXXXXX';
       global.jobId4='XXXXXXXXXXXXXXXXXXXXXXX';
     }
  render() {
    return <AppContainer />;
  }
}