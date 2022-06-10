
/*************************************************
  * InnovaZone
  * URL.js
  * Created by KARTHI NALLIYAPPAN on 13/02/2018
  * Copyright © 2019 InnovaZone. All rights reserved.
  *************************************************/

//Returns all the urls of the web service
module.exports = {

  // Don't command or duplicate this below 3 key with in this file. Key validation enabled in shell script
  isDevelopment: false, // To show log if only isDevelopment is true and set development server App center key
  isStage: false, // To point the stage App to App center (stage) development key with bundle.
  isProduction: true,  // To point the production App to App center (production) development key with bundle.

  // Bundle id 'com.InnovaZones.RNTreeQAIZHips' - Based on the bundle id scandit license key will changed
  QA_BUNDLE_ID: 'com.InnovaZones.RNTreeQAIZHips',
  
  CMB_LICENSE_KEY_QA_IOS: 'Nix6OBNkjveqDocdXuyM9docE0KeSl5QIrrvFMxEwbc=',
  CMB_LICENSE_KEY_QA_ANDROID: 'WFGPFfdFvR0OXMod1E8nyAm1aMR2aYqhmOh/E/QK/Gk=',

  // Bundle id 'com.InnovaZones.RNARTreeIZHips' - Based on the bundle id scandit license key will changed  
  PRODUCTION_BUNDLE_ID: 'com.InnovaZones.RNTreeIZHips', 
  
  CMB_LICENSE_KEY_PRODUCTION_IOS: 'Nix6OBNkjveqDocdXuyM9docE0KeSl5QIrrvFMxEwbc=',
  CMB_LICENSE_KEY_PRODUCTION_ANDROID: 'WFGPFfdFvR0OXMod1E8nyAm1aMR2aYqhmOh/E/QK/Gk=',

    
  APP_VERSION : '4.79', // Production App version
  isDisplayBuildNo: true, // 4 digit in the build will enable / disable
  isAppCenterBuild: true,  // If true - App Store version check will be disabled
  APP_DISPLAY_VERSION: '4.79.6',
  APP_BUILD_NO : '218',

  TOKEN_TYPE: 'Bearer',


};