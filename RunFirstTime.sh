#!/bin/sh

##install node modules
echo "********** INSTALLING NODE MODULE AND STARTING PACKAGE MANAGER ***********";

npm install

echo "********** NODE MODULE INSTALL COMPLETED ***********";

## Import the PropTypes from the prop-types instead of react-native.
# cp -v $PWD/source/replaceFilesToCorrespondingLibrary/Barcode.js $PWD/node_modules/react-native-smart-barcode/Barcode.js

## Add seconds in local notification fire date and time -- iOS
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/RNLocalNotifications.m $PWD/node_modules/react-native-local-notifications/ios/RNLocalNotifications/RNLocalNotifications.m

## Add seconds in local notification fire date and time -- Android
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/RNLocalNotificationsModule.java $PWD/node_modules/react-native-local-notifications/android/src/main/java/com/github/wumke/RNLocalNotifications/RNLocalNotificationsModule.java

## Add the font size and font family in toast message -- iOS
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/UIView+Toast.m $PWD/node_modules/react-native-toast-native/ios/UIView+Toast.m

# ## Remove the override method in the RCTCapturePackage.java (react-native-smart-barcode). -- Android
# cp -v $PWD/source/replaceFilesToCorrespondingLibrary/RCTCapturePackage.java $PWD/node_modules/react-native-smart-barcode/android/src/main/java/com/reactnativecomponent/barcode/RCTCapturePackage.java

# ## Remove the override method in the CaptureView.java (react-native-smart-barcode). -- Android
# ## Change the cature view frame 
# cp -v $PWD/source/replaceFilesToCorrespondingLibrary/CaptureView.java $PWD/node_modules/react-native-smart-barcode/android/src/main/java/com/reactnativecomponent/barcode/CaptureView.java

# ## Remove the override method in the colors.xml (react-native-smart-barcode).
# ## Color changed black insteadoff of transparent -- Android
# cp -v $PWD/source/replaceFilesToCorrespondingLibrary/colors.xml $PWD/node_modules/react-native-smart-barcode/android/src/main/java/com/reactnativecomponent/barcode/colors.xml

# ## Removed the barcode scanner rectangle view -- iOS (react-native-smart-barcode).
# cp -v $PWD/source/replaceFilesToCorrespondingLibrary/RectView.m $PWD/node_modules/react-native-smart-barcode/ios/RCTBarcode/RCTBarcode/RectView.m
# cp -v $PWD/source/replaceFilesToCorrespondingLibrary/RCTBarcode.m $PWD/node_modules/react-native-smart-barcode/ios/RCTBarcode/RCTBarcode/RCTBarcode.m


## react-native-datetime-picker - build.gradle -- Android
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/react-native-datetime-picker/build.gradle $PWD/node_modules/react-native-datetime-picker/android/build.gradle

## react-native-datetime-picker - RCTDateTimePickerPackage.java -- Android
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/react-native-datetime-picker/RCTDateTimePickerPackage.java $PWD/node_modules/react-native-datetime-picker/android/src/main/java/com/remobile/datetimepicker/RCTDateTimePickerPackage.java

## react-native-signature-capture - build.gradle -- Android
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/react-native-signature-capture/build.gradle $PWD/node_modules/react-native-signature-capture/android/build.gradle

## react-native-sqlite-storage - build.gradle -- Android
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/react-native-sqlite-storage/build.gradle $PWD/node_modules/react-native-sqlite-storage/src/android/build.gradle

## react-native-sqlite-storage - android-native - build.gradle -- Android
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/react-native-sqlite-storage/android-native/build.gradle $PWD/node_modules/node_modules/react-native-sqlite-storage/src/android-native/build.gradle

## cmbsdk-react-native - Android RCTCmbSdkModule.java -- Replace
cp -v $PWD/source/replaceFilesToCorrespondingLibrary/RCTCmbSdkModule.java $PWD/node_modules/cmbsdk-react-native/android/src/main/java/com/cmb/RCTCmbSdkModule.java


## Call npx jetify to migrate all node_modules to AndroidX, as follows:
npx jetify

echo "********** FILE REPLACEMENT COMPLETED ***********";

echo "********** CHECK AND KILL ALREADY RUNNING NODE ***********";

killall node

npm start --reset-cache
echo "********** METRO BUNDLER STARTING ***********";

# npm start


