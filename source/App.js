/*************************************************
 * InnovaZone
 * App.js
 * Created by Jagadisg Sellamuthu on 13/02/2018
 * Copyright © 2018 InnovaZone. All rights reserved.
 *************************************************/

'use strict';

import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import BackboneEvents from 'backbone-events-standalone';
import ClerkDashbaordScreen from './screens/ClerkDashbaordScreen';
import CognexTest from './screens/CognexTest';
import codePush from 'react-native-code-push';

// global event bus   
window.EventBus = BackboneEvents.mixin({});
const App = StackNavigator({
  ClerkDashbaordScreen: { screen: ClerkDashbaordScreen },
  
  CognexTest: { screen: CognexTest},

}, {initialRouteName: 'ClerkDashbaordScreen', mode: 'card', headerMode: 'none', navigationOptions: {gesturesEnabled: false}});

AppRegistry.registerComponent('InnovaZones', () => codePush(App));

