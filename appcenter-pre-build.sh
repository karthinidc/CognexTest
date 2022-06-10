#!/usr/bin/env bash

# Example: Change URL's to production when building master branch
# if [ "$APPCENTER_BRANCH" == "Aramark" ];
# then

echo "************ Files replace started ************"

## Import the PropTypes from the prop-types instead of react-native.
# cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/Barcode.js $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-smart-barcode/Barcode.js

## Add seconds in local notification fire date and time -- iOS
cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/RNLocalNotifications.m $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-local-notifications/ios/RNLocalNotifications/RNLocalNotifications.m

## Add seconds in local notification fire date and time -- Android
cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/RNLocalNotificationsModule.java $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-local-notifications/android/src/main/java/com/github/wumke/RNLocalNotifications/RNLocalNotificationsModule.java

## Add the font size and font family in toast message -- iOS
cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/UIView+Toast.m $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-toast-native/ios/UIView+Toast.m

## react-native-datetime-picker - build.gradle -- Android
cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/react-native-datetime-picker/build.gradle $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-datetime-picker/android/build.gradle

## react-native-datetime-picker - RCTDateTimePickerPackage.java -- Android
cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/react-native-datetime-picker/RCTDateTimePickerPackage.java $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-datetime-picker/android/src/main/java/com/remobile/datetimepicker/RCTDateTimePickerPackage.java

## react-native-signature-capture - build.gradle -- Android
cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/react-native-signature-capture/build.gradle $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-signature-capture/android/build.gradle

## react-native-sqlite-storage - build.gradle -- Android
cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/react-native-sqlite-storage/build.gradle $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-sqlite-storage/src/android/build.gradle

## react-native-sqlite-storage - android-native - build.gradle -- Android
cp -v $APPCENTER_SOURCE_DIRECTORY/source/replaceFilesToCorrespondingLibrary/react-native-sqlite-storage/android-native/build.gradle $APPCENTER_SOURCE_DIRECTORY/node_modules/react-native-sqlite-storage/src/android-native/build.gradle

## Call npx jetify to migrate all node_modules to AndroidX, as follows:
# npx jetify
 npm install jetifier@1.6.6
 
 npx jetify

echo "************ Files replaced successfully ************"

# fi
