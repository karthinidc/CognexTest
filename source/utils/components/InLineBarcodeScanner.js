/*************************************************
 * InnovaZone
 * InLineBarcodeScanner.js
 * Created by Selvin Thamodharan  on 21/02/2018
 * Copyright © 2018 InnovaZone. All rights reserved.
 *************************************************/

'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import SoundPlayer from 'react-native-sound-player';

// import Barcode from 'react-native-smart-barcode';
import TimerEnhance from 'react-native-smart-timer-enhance';
import KeepAwake from 'react-native-keep-awake';
import { RNCamera } from 'react-native-camera';

let scanData = '';
let executed = false;

class InLineBarcodeScanner extends Component {
  static propTypes = {
    onBarCodeRead: PropTypes.func,
    isLandscape: PropTypes.bool,
    isFullWidthScanView: PropTypes.bool,
    isRescan: PropTypes.bool,
    isValidateExsitingBarcode: PropTypes.bool,
  };


  static defaultProps = {
    isValidateExsitingBarcode: true,
    isRescan: false,
  };
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    scanData = '';
    this.state = {
      viewAppear: false,
      isLandscape: false,
      deviceHeight: 0,
      isFullWidthScanView: false,
      deviceWidth: 0,
      isRescanTouched: this.props.isRescan,
      isPauseCameraScanner: false,
    };
  }

  async componentDidMount() {
    console.log('componentdidmount ', this.state.isRescanTouched);
    if (this.state.isRescanTouched) {
      console.log('rescanned value '); 
      scanData = '';
    }
    const hasPermission = await this.hasCameraPermission();
    if (hasPermission) {
      this.cameraPermissionGranted();
    } else {
      await this.requestCameraPermission();
    }
    window.EventBus.on('onCameraBarcodeScannerResume', this._cameraBarcodeScannerResumEventHandlerFunc.bind(this));

  }

  componentWillReceiveProps(nextProps) {
    const { isRescan } = nextProps;
    console.log('willreceive props : ', isRescan);
    if (isRescan) {
      console.log('rescanned value ');
      scanData = '';
    }
    this.setState({ isLandscape: nextProps.isLandscape, isRescanTouched: isRescan });
  }

  componentWillUnmount() {
    window.EventBus.off('onCameraBarcodeScannerResume');
  }

    
  _cameraBarcodeScannerResumEventHandlerFunc(){
    this.setState({
      isPauseCameraScanner: false,
    });
  }

  async hasCameraPermission() {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
      return granted;
    } else {
      return true;
    }
  }

  async requestCameraPermission() {
    if (Platform.OS === 'android') {
      try {
        global.isAlertShowing = true;
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Android Camera Permission has been granted.');
          this.cameraPermissionGranted();
        } else {
          console.log('Android Camera Permission has been denied - the app will shut itself down.');
          this.cameraPermissionDenied();
        }
        setTimeout(() => {
          global.isAlertShowing = false;
        }, 100);
      } catch (err) {
        setTimeout(() => {
          global.isAlertShowing = false;
        }, 100);
        console.warn(err);
      }
    } else {
      this.cameraPermissionGranted();
    }
  }

  cameraPermissionGranted() {
    this.setTimeout(() => {
      this.setState({
        viewAppear: true,
      });
    }, 255);
  }

  // /**
  //  * Called once the bardcode readed
  //  * @param  {Object} e Event from a component
  //  */
  // _onBarCodeRead = (e) => {
  //   console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`);
  //   this._stopScan();
  //   this.props.onBarCodeRead(e.nativeEvent.data.code);
  //   this.setTimeout( () => {
  //     this._startScan();
  //   }, 3000);
  // }

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
   * Method is called when view size changed due to screen orientation changed.
   */
  onLayout(e) {
    this.setState({ deviceHeight: e.nativeEvent.layout.height, deviceWidth: e.nativeEvent.layout.width });
  }

  /**
   *  Called once the bardcode readed
   * @param {*} scanResult 
   */
  onBarCodeRead(scanResult) {
    const { isValidateExsitingBarcode } = this.props;
    const { isPauseCameraScanner } = this.state;
    if (scanResult.data != null) {
      if (scanData !== scanResult.data) {
        if (isValidateExsitingBarcode) {
          scanData = scanResult.data;
          this.props.onBarCodeRead(scanResult.data);
        }else {
          if (!isPauseCameraScanner) {
            try {
              // play the file Scan_Beep.wav
              SoundPlayer.playSoundFile((Platform.OS === 'ios') ? 'Scan_Beep' : 'alert_tone', (Platform.OS === 'ios') ? 'wav' : 'mp3');
            } catch (error) {
              // log
            }
            this.setState({isPauseCameraScanner:true});
            this.props.onBarCodeRead(scanResult.data);
          }
        }
      }
      // if (!this.barcodeCodes.includes(scanResult.data)) {
      //   this.barcodeCodes.push(scanResult.data);
      // }
    }
    return;
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}
        onLayout={this.onLayout.bind(this)}
      >
        {this.state.viewAppear && Platform.OS === 'ios' ?
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.preview}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
          : null}
        <KeepAwake />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default TimerEnhance(InLineBarcodeScanner);