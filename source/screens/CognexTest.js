'use strict';

import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Platform,
  Linking,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import globalStyle from './css/GlobalStyleCSS';
import PropTypes from 'prop-types';
import screenStyle from './css/FrockZoneScreenCSS';
import CognexScanner from '../utils/components/CognexScanner'; 
import { SCREEN_TITLE, FONT_FAMILY, COLOR, VALIDATION_MSG, CART_SCREEN_VALIDATION_MESSAGES, SUCCESS_MSG, ALERT, STORAGE,
  CONFIGURATIONKEY, CSV_GROUP, CATEGORY_SLUG, DATE_FORMAT, REACT_TIMEOUT, HTTP_CODE,
  ZONE_LAYOUT_TYPE, NETWORK_ERROR, SCANNER, DEVICE_RESPONSE, ORDER_TYPE, DEFAULT} from '../common/Constants';
import Events from 'react-native-simple-events';
import InLineBarcodeScanner from '../utils/components/InLineBarcodeScanner';
import { NavigationActions } from 'react-navigation';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

class CognexTest extends Component {
    static propTypes = {
      navigation: PropTypes.object,
    };
    constructor(props){
      super(props);
      this.state ={
        dataSource:[],
        txtValue: '',
      };
    }

    _selectReturnButtonTouched(){
      console.log('******** _selectReturnButtonTouched *******:', this.state.txtValue);

      if (this.state.txtValue) {
        let tempData = this.state.dataSource;
        tempData.push(this.state.txtValue);
        this.setState({dataSource :tempData, txtValue: '' });
        Events.trigger('onCognexScannerStartScan', {});      
        window.EventBus.trigger('onCameraBarcodeScannerResume');
      }else {
        Events.trigger('onCognexScannerStartScan', {});
        window.EventBus.trigger('onCameraBarcodeScannerResume');
        alert('NO DATA');
      }
    }

    _renderRowDataOrderItem = ({item, index}) => {
      return (
        <View style={{borderBottomColor: 'red', borderBottomWidth:2}}>
          <Text style={{fontSize: 30, paddingVertical: 10}}>
            {item}
          </Text>
        </View>
        
      );

    }

  /**
    * Method render listview if data is available
    * else render No Product Found label
    */
    _renderList(){
      console.log('****** this.state.dataSource *******:', this.state.dataSource);
      return(
        <View style={{ flex: 1, backgroundColor:'#FFFFFF', marginBottom: 70 }}>
          <FlatList
            style={{}}
            extraData = {this.state.dataSource}
            data={this.state.dataSource}
            renderItem={(this._renderRowDataOrderItem)}
            enableEmptySections={true}
            onEndReachedThreshold={1}
            removeClippedSubviews={false}
            keyExtractor={(item) => item.id}
            refreshing={this.state.isFetching}
          />
        </View>
      );          
    }

    _goBack(){
      const moveToFirst = NavigationActions.reset(
        {
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'ClerkDashbaordScreen', 'params': {} }),
          ],
        });
      this.props.navigation.dispatch(moveToFirst);

    }


    _renderToolBar(){
      return(
        <View style={{flexDirection:'column', height :'20%'  }}>
          <View style={[globalStyle.toolbar, {backgroundColor : 'rgba(4, 5, 9, 0.5)'}]}>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {this._goBack();}}
            >
              <Image
                resizeMode="contain"
                source={require('../images/Back.png')}
                style={globalStyle.backImage}
              />
            </TouchableHighlight>
  
            <Text style={[globalStyle.toolbarTitleText ]}>
              {'COGNEX TEST'}
            </Text>
            <View style={globalStyle.toolbarRightView} />
             
          </View> 
          <View style={{position:'absolute'}}>
            <View style={{ width:deviceWidth}}>
              <CognexScanner
                screenType={'FULLWIDTH'}
                onBarCodeRead={(data) => {
                  console.log('******** onBarCodeRead *******:', data);
                  console.log('******** txtValue BEFORE *******:', this.state.txtValue);
                  this.setState({txtValue: data}, ()=> {
                    console.log('******** txtValue *******:', this.state.txtValue);
                    this._selectReturnButtonTouched();
                  }); 
                  
    
                }}
              />
            </View>    

            

            {/* <View style={{height:160, width:deviceWidth}}>
              <InLineBarcodeScanner
                isFullWidthScanView={true}
                isValidateExsitingBarcode={false}
                isLandscape={this.state.isLandscape}
                onBarCodeRead={(data) => {
                  console.log('******** onBarCodeRead *******:', data);
                  this.setState({txtValue: data}, ()=> {
                    this._selectReturnButtonTouched();
                  });           
                }}
              />
            </View> */}

          </View>              
        </View>
              
      );
        
    }

    _doneAndExitButtonSubmit(){
      this.setState({dataSource :[], txtValue: '' });

      this.props.navigation.navigate('CognexTest', {  });
    }

    _renderBottomBanner(){
      return(
        <View style ={[screenStyle.bottomMainViewContainer]}>

          <View style={[screenStyle.doneAndExitContainer, {marginVertical: 10}]}>
            <TouchableOpacity
              style={[screenStyle.doneAndExitTouchable, {backgroundColor: COLOR.THEME}]}
              onPress={() => this._goBack()}
            >
              <Text style={[screenStyle.doneAndExitButtonText, { paddingHorizontal: 35, paddingVertical: 10, fontSize: 24 }]}>
                {'BACK'}
              </Text>
            </TouchableOpacity>
          </View>
          

          <View style={[screenStyle.doneAndExitContainer, {marginVertical: 10}]}>
            <TouchableOpacity
              style={[screenStyle.doneAndExitTouchable, {backgroundColor: COLOR.GREEN}]}
              onPress={() => this._doneAndExitButtonSubmit()}
            >
              <Text style={[screenStyle.doneAndExitButtonText, { paddingHorizontal: 15, paddingVertical: 10, fontSize: 24 }]}>
                {'NEXT SCREEN'}
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      );
    }

    _onchangeAssetValue(text){
      this.setState({txtValue : text});
       
    }


    _renderSectionHeader() {
      return(
        <View style = {{flexDirection:'row', height: 100, borderBottomWidth: 2, borderBottomColor: 'lightgray'}}>
          <View style ={{flex: 660, paddingVertical:10}}>
            <TextInput
              // ref = {(component) => this.textinput = component}
              autoCapitalize= "none"
              placeholder= {'SCAN DATA'}
              autoCorrect= {false}
              onFocus = {() => {
                this.setState({isAssetFocused : true});
              }}
              style={
                [screenStyle.textInput,  
                  {height: 50 , fontSize: screenHeight/45,
                    backgroundColor:  COLOR.TEXT_INPUT_BACKGROUND_COLOR,
                    borderWidth: 2,
                    borderColor :'lightgray', borderRadius:10,       
                  }]}
              maxLength = {50}
              onChangeText={(text) => this._onchangeAssetValue(text,)}
              value={this.state.txtValue}
              returnKeyType= "next"  
              onSubmitEditing={(event) => {
                this.setState({isAssetFocused : false});
              }}
              onBlur = {(event) => {
                this.setState({isAssetFocused: false});
              }}
            />
          </View>
          <View style={screenStyle.sectionListHeaderViewSeparator} />
          <View style ={{flex: 80, justifyContent:'center', alignItems:'center'}}>
            <TouchableHighlight underlayColor="transparent" onPress={() => this._selectReturnButtonTouched()}>
              <Image source={require('../images/RedTick.png')}
                style={{height:40,  width:40}}
              />
            </TouchableHighlight>
                
          </View>
          <View style={{ height: 2, backgroundColor: 'lightgray'}} />
        </View>

      );
    }
    render() {
      return(
        <View style={[globalStyle.container, {alignItems: 'center', justifyContent: 'center'}]}>
          <View style={[globalStyle.container, {position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'stretch', backgroundColor: COLOR.WHITE}]}>
            {this._renderToolBar()}
            {this._renderSectionHeader()}
            {this._renderList()}

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {this._renderBottomBanner()}
            </View>
          </View>
        </View>
      );
     
    }

}

export default CognexTest;
