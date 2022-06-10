/*************************************************
 * InnovaZone
 * FrockZoneScreenCSS.js
 * Created by Karthi on 31/05/2018
 * Copyright © 2018 InnovaZone. All rights reserved.
 *************************************************/

'use strict';

/**
 * Returns all the styles used in the FrockZoneScreenCSS
 */

import React from 'react-native';
let {
  StyleSheet,
  Platform,
} = React;

import { FONT_FAMILY, COLOR } from '../../common/Constants';
// let deviceWidth = Dimensions.get('window').width;
// let deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomMainViewContainer:{
    position: 'absolute', 
    flexDirection:'row', 
    bottom: 0, 
    alignItems: 'center', 
    backgroundColor:COLOR.NAVIGATION_BAR_BG,
  },
  sectionListHeaderViewSeparator: {
    flex: 2,
    backgroundColor: 'lightgray',
  },
  sectionRowDataViewSeparator: {
    flex: 2,
    backgroundColor: 'lightgray',
  },
  sectionHeaderText: {
    fontWeight: '500',
    fontFamily: 'HelveticaNeue-CondensedBold',
    color:'#FFFFFF',
  },
  sectionHeaderView: {
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderColor: 'lightgray',
  },
  doneAndExitContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneAndExitButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.HELVETICA_CONDENSEDBOLD,
  },
  doneAndExitTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: COLOR.THEME,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  commentTextViewContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  textInput: {
    marginVertical: (Platform.OS == 'ios') ?5: 0,
    paddingHorizontal: 10,
    backgroundColor: COLOR.TEXT_INPUT_BACKGROUND_COLOR,
    borderWidth : 2,
    borderColor: 'lightgray',
    color: '#000000',
    flex:1,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: (Platform.OS == 'ios') ? 5:0,
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  textInputStyle: {
    height: 60,
    fontSize: 22,
    paddingLeft: 20,
    color: 'black',
    backgroundColor: '#EFEFEF',
    borderWidth: 2,
    borderColor: 'gainsboro',
    borderRadius: 10,
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  dropDownContainer:{
    flex:1, 
    marginLeft:20, 
    justifyContent:'center', 
    backgroundColor: '#EAEBED', 
    borderWidth : 2, 
    borderColor: 'lightgray', 
    borderRadius: (Platform.OS == 'ios') ? 5:0,
  },
  listDropdownContainer:{
    marginLeft:20, 
    justifyContent:'center', 
    backgroundColor: '#EAEBED', 
    borderWidth : 2, 
    borderColor: 'lightgray',
    borderRadius: (Platform.OS == 'ios') ? 5:0,
  },
});