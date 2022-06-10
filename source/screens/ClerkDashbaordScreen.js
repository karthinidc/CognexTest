/*************************************************
 * InnovaZone
 * ClerkDashbaordScreen.js
 * Created by Selvin Thamodharan on 21/02/2018
 * Copyright © 2018 InnovaZone. All rights reserved.
 *************************************************/

'use strict';

import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,

} from 'react-native';
import PropTypes from 'prop-types';

import { VALIDATION_MSG, EMPTY_MSG, SUCCESS_MSG, ALERT, CONFIGURATIONKEY, STORAGE, REACT_TIMEOUT, NETWORK_ERROR, COLOR, CATEGORY_SLUG, FONT_FAMILY, SERVER } from '../common/Constants';
import screenStyle from './css/ClerkDashbaordScreenCSS';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;


/**
 * Handles Clerk dashoard employee serach, sync functionality
 */
class ClerkDashbaordScreen extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    if (deviceWidth > deviceHeight) {
      screenHeight = deviceWidth;
    }

  
    this.state = {
      isLandscape: false,
    
    };
  }



  render() {
    return (
      <View style={screenStyle.container}  >
        <StatusBar
          hidden={true}
        />
        <Image source={this.state.isLandscape ? require('../images/LaunchImageLandscape.png') : require('../images/LaunchImagePortrait.png')} resizeMode="cover" style={{ height: deviceHeight, width: deviceWidth }} />
   
        <View style={[screenStyle.container, { position: 'absolute', alignItems:'center', justifyContent:'center', top: 0, bottom: 0, left: 0, right: 0 }]}>
          <TouchableOpacity
            style={[screenStyle.doneAndExitTouchable, {backgroundColor: COLOR.GREEN_1}]}
            onPress={() => {this.props.navigation.navigate('CognexTest', {  });}}
          >
            <Text style={[screenStyle.doneAndExitButtonText, { paddingHorizontal: 15, paddingVertical: 10, fontSize: 24 }]}>
              {'COGNEX SCANNER SCREEN'}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default ClerkDashbaordScreen;
