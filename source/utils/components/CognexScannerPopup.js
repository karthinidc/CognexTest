/* eslint-disable indent */

/*************************************************
 * InnovaZone
 * CognexScannerPopup.js
 * Created by Selvin Thamodharan on 21/02/2018
 * Copyright © 2018 InnovaZone. All rights reserved.
 *************************************************/

 'use strict';

 import React from 'react';
 import {
   StyleSheet,
   View,
   Modal,
   TouchableOpacity,
   Text,
   Dimensions,
   Image,
   Platform,
   TextInput,
   TouchableHighlight,
 } from 'react-native';
 
 import PropTypes from 'prop-types';
 // import Barcode from 'react-native-smart-barcode';
 import { COLOR, CONFIGURATIONKEY, SCANNER, FONT_FAMILY, FONT_SIZE } from '../../common/Constants';
 import CognexScanner from './CognexScanner'; 
import Events from 'react-native-simple-events';

 
 let screenHeight = Dimensions.get('window').height;
 let screenWidth = Dimensions.get('window').width;
 let arrScanList = [];
 let isBarcodeScanned = false;
 
 export default class CognexScannerPopup extends React.Component {
 
   static propTypes = {
     visible: PropTypes.bool,
     onClose: PropTypes.func,
     recan: PropTypes.func,
     onScanCompleted: PropTypes.func,
     onDeviceIconTap: PropTypes.func,
     visibleDeviceScanner: PropTypes.bool,
     isLandscape: PropTypes.bool,
     isAuthenticationType: PropTypes.bool,
     isMatrixScanType: PropTypes.bool,
     isVisbileRfid: PropTypes.bool,
   };
 
   static defaultProps = {
     visible: false,
     visibleDeviceScanner: true,
     isLandscape: false,
     isAuthenticationType: false,
     isMatrixScanType: false,
     isVisbileRfid: false,
   };
 
   constructor(props) {
     super(props);
     if (Dimensions.get('window').width > Dimensions.get('window').height) {
       screenHeight = Dimensions.get('window').width;
     }
     this.state = {
       visible: this.props.visible,
       scannedValue: '',
       isInfineaEnabled: false,
       isRFIDSerialioEnabled: false,
       isUHFRFIDEnabled: false,
       isScanditEnabled: false,
       isMagneticCardEnabled: false,
       isDeviceCameraScannerEnabled: false,
       infineaDeviceConnectedStatus: '',
       txtTempScanValue: '',
       isCognexEnabled: false,
     };
   }
 
   componentDidMount() {
  
     this.setState({ isCognexEnabled: true });
   }
 
   componentWillReceiveProps(nextProps) {
     const { visible } = nextProps;
     this.setState({ visible });
     this.setState({ scannedValue: '' });
   }
 
   /**
    * Start bardcode scanning
    * @param  {Object} e Event from a component
    */
   _startScan = (e) => {
     this._barCode.startScan();
   }
 
   /**
    * Stop barcode scanning
    * @param  {Object} e Event from a component
    */
   _stopScan = (e) => {
     this._barCode.stopScan();
   }
 
   /**
    * Render scanned value based on the availability
    */
   _renderScannedValue() {
     if (this.state.scannedValue === '') {
       return (
         <View style={{ marginTop: 20, alignItems: 'center' }}>
           <Text style={{ fontSize: screenHeight / 55, color: 'black', fontFamily: 'HelveticaNeue-CondensedBold' }}>
             Not yet scanned
            </Text>
         </View>
       );
     }
 
     return (
       <View style={{ marginTop: 20, alignItems: 'center' }}>
         <Text style={{ fontSize: screenHeight / 55, color: 'black', fontFamily: 'HelveticaNeue-CondensedBold' }}>
           Scanned Value: {this.state.scannedValue}
         </Text>
       </View>
     );
   }
 
   _reScan() {
     const { isScanditEnabled, isDeviceCameraScannerEnabled } = this.state;
     if (isScanditEnabled) {
       window.EventBus.trigger('onScanditScannerResume');
     } else if (isDeviceCameraScannerEnabled) {
       this.setState({ scannedValue: '' });
       console.log('this._barCode.startScan : ');
       if (isBarcodeScanned) {
         setTimeout(() => {
           this._barCode.startScan();
           isBarcodeScanned = false;
         }, 3000);
       }
     }
   }
 
   onBarCodeRead(scanResult) {
     if (scanResult.data != null) {
       this.props.onScanCompleted(scanResult.data);
     }
     return;
   }
 
 
   _renderScannerView() {
       return (
         <View style={{ flex: 1, flexDirection: 'row' }}>
                 <CognexScanner
                 isVisibleScanner={true}
                 screenType={'POPUP'}
                 onBarCodeRead={(data) => {
                   console.log('*********** onBarCodeRead **********:', data );
                    this.props.onScanCompleted(data);
                 }}
                 />
         </View>
       );
     
   }
 
   render() {
     const { visibleDeviceScanner, isLandscape, isMatrixScanType } = this.props;
     const { isDeviceCameraScannerEnabled, visible } = this.state;
       
        return (
            
                (visible) ?
                <View style={[styles.container, {position:'absolute',  top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center'}]} key={`spinner_${Date.now()}`}>
              <View style={styles.modalFullContainer}>
                <View style={[styles.modalInnerContainer, {
                  width: (Platform.OS === 'ios') ? screenHeight * (3 / 5) : (isLandscape) ? screenWidth / 1.2 : screenWidth / 1.2,
                  height: (Platform.OS === 'ios') ? screenHeight * (3 / 5) : (isLandscape) ? screenHeight / 1.7 : screenHeight / 1.7,
                }]}
    
                >
                  {this._renderScannerView()}
                
    
                  {
                    (isDeviceCameraScannerEnabled && !visibleDeviceScanner) ?
                      this._renderScannedValue()
                      :
                      null
                  }
    
                  <View style={{ height: 2, backgroundColor: 'red', marginTop: 20 }} />
    
                  <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
    
                    <TouchableOpacity
                      style={styles.scanBtnStyle}
                      underlayColor={'transparent'}
                      onPress={() => {
                        if (isMatrixScanType) {
                          this.props.onScanCompleted(arrScanList);
                        } else {
                          this.props.onScanCompleted(this.state.scannedValue);
                          Events.trigger('onCognexScannerResume', {isScan : 2});
                        }
                      }}
                    >
                      <Text style={styles.scanBtnText}>
                        {'  DONE  '}
                      </Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity
                      style={[styles.scanBtnStyle, { marginLeft: screenHeight / 40 }]}
                      underlayColor={'transparent'}
                      onPress={() => {
                        arrScanList = [];
                        this._reScan();
                      }}
                    >
                      <Text style={styles.scanBtnText}>
                        RE-SCAN
                       </Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity
                      style={[styles.scanBtnStyle, { marginLeft: screenHeight / 40 }]}
                      underlayColor={'transparent'}
                      onPress={() => {
                        arrScanList = [];
                        this.props.onClose();
                        Events.trigger('onCognexScannerResume', {isScan : 2});
                      }}
                    >
                      <Text style={styles.scanBtnText}>
                        CANCEL
                       </Text>
                    </TouchableOpacity>
    
                  </View>
                  
                </View>
              </View>
            </View>
                :
                null
            
        ); 
     }
         
     
     
 
 }
 
 //Has all the styles of all the controls
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
   modalFullContainer: {
     flex: 1,
     backgroundColor: 'transparent',
     alignItems: 'center',
     justifyContent: 'center',
   },
   modalInnerContainer: {
     width: (Platform.OS === 'ios') ? screenHeight * (3 / 5) : screenWidth / 1.2,
     height: (Platform.OS === 'ios') ? screenHeight * (3 / 5) : screenHeight / 1.7,
     backgroundColor: 'white',
     padding: 20,
     borderRadius: 20,
   },
   scanBtnStyle: {
     backgroundColor: COLOR.THEME,
     borderWidth: 2,
     borderColor: COLOR.THEME,
     borderRadius: 5,
     marginTop: 10,
     justifyContent: 'center',
     alignItems: 'center',
     paddingVertical: 10,
     paddingHorizontal: 25,
   },
   scanBtnText: {
     fontSize: 20,
     color: 'white',
     fontWeight: 'bold',
     fontFamily: 'HelveticaNeue-CondensedBold',
   },
   preview: {
     flex: 1,
     justifyContent: 'flex-end',
     alignItems: 'center',
   },
 });
 