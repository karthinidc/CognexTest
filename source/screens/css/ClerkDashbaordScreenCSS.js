/*************************************************
 * InnovaZone
 * ClerkDashbaordScreenCSS.js
 * Created by Karthi Nalliyappan on 27/03/2018
 * Copyright © 2018 InnovaZone. All rights reserved.
 *************************************************/

'use strict';

/**
 * Returns all the styles used in the ClerkDashbaordScreen
 */

import React from 'react-native';
let {
  StyleSheet,
  Platform,
  Dimensions,
} = React;
import { FONT_FAMILY, COLOR } from '../../common/Constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: COLOR.THEME,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign:'center',
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  toolBarUserName:{
    flex: 1, 
    color: 'black', 
    marginRight: 20, 
    fontWeight: 'bold', 
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
    textAlign: 'right',
  },
  companyNameText:{
    color: 'black', 
    fontWeight: 'bold', 
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  searchInput: {
    flex: 1,
    marginVertical: (Platform.OS == 'ios') ?5: 0,
    color:COLOR.THEME,
    textAlign:(Platform.OS == 'ios') ? 'auto': 'auto',
    backgroundColor: 'transparent',
    fontWeight:'700',
    borderRadius: (Platform.OS == 'ios') ? 5:0,
  }, 
  serachMainContainer:{
    flexDirection:'row', 
    alignItems:'center',
  },
  searchButtonImage:{
    marginLeft: 20,
  },
  searchBarBottomLine: {
    height: 0.5,
    backgroundColor: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal:20,
    alignItems: 'center',
    flex:1,
    
  },
  sectionHeaderView: {
    alignItems:'center', 
    width: 150, 
    paddingVertical:15,
  },
  sectionHeaderText: {
    fontSize:20, 
    fontWeight:'700',
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  sectionViewSeparator: {
    width:2, 
    backgroundColor:'#ffffff',
  },
  rowContainer:{
    justifyContent:'center', 
    flex:1, 
    borderWidth:1, 
    borderRadius:2, 
    borderColor:COLOR.SEPARATOR_LIGHT_GRAY, 
    shadowColor:'#d7d7d7',
  },
  rowViewStyle:{
    width: 150,
    alignItems:'center',
    justifyContent:'center',
  },
  employeeNameContainer:{
    flex: 1,  
    paddingVertical:25,  
    justifyContent:'center', 
    paddingLeft:15,
  },
  rowSeparatorStyle:{
    width:1, 
    backgroundColor:COLOR.SEPARATOR_LIGHT_GRAY,
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
  profileImageCell:{
    height: 100, 
    width: 120,
  },
  rowText:{
    fontSize:20, 
    fontWeight:'800',
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
    color:COLOR.LISTVIEW_ROW_TEXT_COLOR,
  },
  versionText:{
    color:'black', 
    fontSize:16, 
    marginRight:15, 
    marginBottom:5, 
    fontWeight:'800',
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  crnNoTxt: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: deviceHeight / 60,
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  passwordButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: deviceHeight * (1 / 30),
    borderRadius: 10,
    padding: deviceHeight / 60,
    paddingVertical: 10,
    backgroundColor: COLOR.THEME,
  }, 
  passwordButtonText: {
    fontSize: deviceHeight/34.13,
    color: 'white',
    fontWeight: 'bold',
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  textInputStyle: {
    height: deviceHeight/18.8,
    fontSize: deviceHeight/39.13,
    paddingLeft: 20,
    color: 'black',
    backgroundColor: '#EFEFEF',
    borderWidth: 2,
    borderColor: 'gainsboro',
    borderRadius: 10,
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
  },
  modalPasswordMainContainer:{
    backgroundColor:'rgba(4, 5, 9, 0.5)', 
    flex:1, 
    position: 'absolute', 
    justifyContent:'center', 
    alignItems:'center', 
    height: deviceHeight, 
    width: deviceWidth,
  },
  modalPasswordContentContainer:{
    backgroundColor: '#FFFFFF', 
    paddingHorizontal:20,
    paddingVertical:20, 
    borderRadius:10,
  },
  bottomMainContainer:{
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    alignItems: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLOR.THEME,
  },
  enroll: {
    flex: 1,
    alignItems: 'center',
    height:deviceHeight/12.8, 
    width: deviceHeight/12,
    marginLeft: deviceWidth/95,
  }, 
    
  text:{
    fontSize: deviceHeight/60,
    color: 'white',
    fontFamily:'HelveticaNeue-CondensedBold',
    fontWeight: 'bold',
  },
  lineBar:{
    height: deviceHeight/16 , 
    backgroundColor:'black',
    width: 0.8,
  },
  image:{
    height:deviceHeight/25, 
    width: deviceWidth/18,
    marginTop: deviceHeight/95,
  },
  logoutImage:{
    height:deviceHeight/30, 
    width: deviceHeight/30,
    marginTop: deviceHeight/50,
  },
  helpView:{
    height:deviceHeight/12.8,
    marginLeft:deviceHeight/45,
  },
  logoutText: {
    color: 'white', 
    fontWeight: 'bold', 
    fontFamily:FONT_FAMILY.HELVETICA_CONDENSEDBOLD, 
    textAlign: 'right',
    marginLeft: deviceHeight/60,
    fontSize: deviceHeight/60,
    marginTop:deviceHeight/40,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.HELVETICA_CONDENSEDBOLD,
  },
  cancelTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: COLOR.THEME,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
});