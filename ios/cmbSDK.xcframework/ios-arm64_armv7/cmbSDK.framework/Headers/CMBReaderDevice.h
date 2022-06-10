//
//  CMBReaderDevice.h
//  MX_SDK_FW
//
//  Created by Gyula Hatalyak on 09/01/17.
//  Copyright © 2017 Gyula Hatalyak. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <cmbSDK/CMBReadResults.h>
#import <cmbSDK/CDMDataManSystem.h>


/**
 * Indicates the connection state of a {@link CDMDataManSystem} object.
 */
typedef enum : NSUInteger {
    /**
     * The {@link CDMDataManSystem} object is not connected to any remote system.
     */
    CMBConnectionStateDisconnected,
    /**
     * The {@link CDMDataManSystem} object is in the process of establishing a connection to a remote system.
     */
    CMBConnectionStateConnecting,
    /**
     * The {@link CDMDataManSystem} object is connected to a remote system.
     */
    CMBConnectionStateConnected,
    /**
     * The {@link CDMDataManSystem} object is in the process of disconnecting from a remote system.
     */
    CMBConnectionStateDisconnecting,
    /**
     * The {@link CDMDataManSystem} object's connection state is unavailable.
     */
    CMBConnectionStateUnavailable
} CMBConnectionState;

/**
 * Enum values for supported barcode symbologies
 */
typedef enum : NSUInteger {
    CMBSymbologyUnknown,
    CMBSymbologyDataMatrix,
    CMBSymbologyQR,
    CMBSymbologyC128,
    CMBSymbologyUpcEan,
    CMBSymbologyC11,
    CMBSymbologyC39,
    CMBSymbologyC93,
    CMBSymbologyI2o5,
    CMBSymbologyCodaBar,
    CMBSymbologyEanUcc,
    CMBSymbologyPharmaCode,
    CMBSymbologyMaxicode,
    CMBSymbologyPdf417,
    CMBSymbologyMicropdf417,
    CMBSymbologyDatabar,
    CMBSymbologyPlanet,
    CMBSymbologyPostnet,
    CMBSymbologyFourStateJap,
    CMBSymbologyFourStateAus,
    CMBSymbologyFourStateUpu,
    CMBSymbologyFourStateImb,
    CMBSymbologyVericode,
    CMBSymbologyRpc,
    CMBSymbologyMsi,
    CMBSymbologyAzteccode,
    CMBSymbologyDotcode,
    CMBSymbologyC25,
    CMBSymbologyC39ConvertToC32,
    CMBSymbologyOcr,
    CMBSymbologyFourStateRmc,
    CMBSymbologyTelepen
} CMBSymbology;

/**
 * Enum values for {@link CMBReaderDevice} availability
 */
typedef enum : NSUInteger {
    CMBReaderAvailibilityUnknown,
    CMBReaderAvailibilityAvailable,
    CMBReaderAvailibilityUnavailable
} CMBReaderAvailibility;

@class CMBReaderDevice;

/**
 * Enum values for {@link CMBReaderDevice} parser
 */
typedef enum : NSUInteger {
    CMBResultParserNone,
    CMBResultParserAuto,
    CMBResultParserAAMVA,
    CMBResultParserGS1,
    CMBResultParserHIBC,
    CMBResultParserISBT128,
    CMBResultParserIUID,
    CMBResultParserSCM
} CMBResultParser;

/**
* Possible values of Read String encoding for {@link CMBReaderDevice}
*/
typedef enum : NSUInteger {
    CMBReadStringEncodingAuto,
    CMBReadStringEncodingUTF_8,
    CMBReadStringEncodingUTF_16,
    CMBReadStringEncodingUTF_32,
    CMBReadStringEncodingISO_8859_1,
    CMBReadStringEncodingISO_8859_2,
    CMBReadStringEncodingShift_JIS,
    CMBReadStringEncodingUS_ASCII,
    CMBReadStringEncodingUS_ASCII_SHOW_NON_PRINTABLE
} CMBReadStringEncoding;

/**
 * Delagate protocol for receiving events from a {@link CMBReaderDevice} object
 */
@protocol CMBReaderDeviceDelegate <NSObject>

@optional

/**
 * Called if the {@link CMBReaderDevice} availability state has been changed
 * @param reader The caller {@link CMBReaderDevice} instance
 */
- (void)availabilityDidChangeOfReader:(CMBReaderDevice *_Nonnull)reader;
/**
 * Called if the {@link CMBReaderDevice} connection state has been changed
 * @param reader The caller {@link CMBReaderDevice} instance
 */
- (void)connectionStateDidChangeOfReader:(CMBReaderDevice *_Nonnull)reader;

/**
 * Called if {@link CMBReadResults} arrived from the reader
 * @param reader The caller {@link CMBReaderDevice} instance
 * @param readResults The {@link CMBReadResults} object containing the results from the reader
 */
- (void)didReceiveReadResultFromReader:(CMBReaderDevice *_Nonnull)reader results:(CMBReadResults *_Nonnull)readResults;

@end

/**
 * Represents a Phone Camera or MX barcode reader.
 * You should instantiate this class using #readerOfDeviceCameraWithCameraMode:previewOptions:previewView: or #readerOfMXDevice class level methods.
 */
@interface CMBReaderDevice : NSObject

/**
 * Tells the connection type of the {@link CMBReaderDevice} object
 */
@property (readonly) DataManDeviceClass deviceClass;

/**
 * Returns the availability of the reader
 * @return {@link CMBReaderAvailibility} state of the reader
 * @see CMBReaderAvailibility
 */
@property (readonly) CMBReaderAvailibility availability;

/**
 * Returns the current connection state of the reader
 * @return the current {@link CMBConnectionState} of the reader
 * @see CMBConnectionState
 */
@property (readonly) CMBConnectionState connectionState;

/**
 * Enable or disable image results from reader
 */
@property (readwrite) BOOL imageResultEnabled;

/**
 * Enable or disable SVG image graphics results from reader
 */
@property (readwrite) BOOL SVGResultEnabled;

/**
 * Optionally set a {@link CMBResultParser} to be applied to a successful read result that is parsable with the specified setting
 * @see CMBResultParser
 */
@property (readwrite) CMBResultParser parser;

/**
 * Set the {@link CMBReadStringEncoding} that is used to decode Read String from base64 result
 * @see CMBReadStringEncoding
*/
@property (readwrite) CMBReadStringEncoding readStringEncoding;

/**
 * Delegate object to receive events from the {@link CMBReaderDevice} object
 * @see CMBReaderDeviceDelegate
 */
@property (weak) id<CMBReaderDeviceDelegate> _Nullable delegate;

/**
 * Creates a {@link CMBReaderDevice} object for a connected MX barcode reader.
 * @return The newly created {@link CMBReaderDevice} object.
 */
+ (instancetype _Nonnull) readerOfMXDevice;

/**
 * Creates a {@link CMBReaderDevice} object for a Phone Camera barcode reader.
 * @param cameraMode        The {@link CDMDataManSystem::CDMCameraMode} when using the Mobile device camera.
 * @param previewOptions    The {@link CDMPreviewOption} when using the Mobile device camera.
 * @return                    The newly created {@link CMBReaderDevice} object.
 */
+ (instancetype _Nonnull) readerOfDeviceCameraWithCameraMode:(CDMCameraMode)cameraMode
                                              previewOptions:(CDMPreviewOption)previewOptions;

/**
* Creates a {@link CMBReaderDevice} object for a Phone Camera barcode reader.
* @param cameraMode        The {@link CDMDataManSystem::CDMCameraMode} when using the Mobile device camera.
* @param previewOptions    The {@link CDMPreviewOption} when using the Mobile device camera.
* @param previewContainer    The container where the camera preview will be placed.
* @return                    The newly created {@link CMBReaderDevice} object.
*/
+ (instancetype _Nonnull) readerOfDeviceCameraWithCameraMode:(CDMCameraMode)cameraMode
                                              previewOptions:(CDMPreviewOption)previewOptions
                                                 previewView:(UIView*_Nullable)previewContainer;

/**
 * Creates a {@link CMBReaderDevice} object for a Phone Camera barcode reader.
 * @param cameraMode        The {@link CDMDataManSystem::CDMCameraMode} when using the Mobile device camera.
 * @param previewOptions    The {@link CDMPreviewOption} when using the Mobile device camera.
 * @param previewContainer    The container where the camera preview will be placed.
 * @param registrationKey The registration key for the Phone Camera license.
 * @return                    The newly created {@link CMBReaderDevice} object.
 */
+ (instancetype _Nonnull) readerOfDeviceCameraWithCameraMode:(CDMCameraMode)cameraMode
                                              previewOptions:(CDMPreviewOption)previewOptions
                                                 previewView:(UIView*_Nullable)previewContainer
                                             registrationKey:(NSString*_Nullable)registrationKey;

/**
 * Creates a {@link CMBReaderDevice} object for a Phone Camera barcode reader.
 * @param cameraMode        The {@link CDMDataManSystem::CDMCameraMode} when using the Mobile device camera.
 * @param previewOptions    The {@link CDMPreviewOption} when using the Mobile device camera.
 * @param previewContainer    The container where the camera preview will be placed.
 * @param registrationKey    The registration key for the Phone Camera license.
 * @param customData    The custom data used when licensing for custom tracking.
 * @return                    The newly created {@link CMBReaderDevice} object.
 */
+ (instancetype _Nonnull ) readerOfDeviceCameraWithCameraMode:(CDMCameraMode)cameraMode
                                               previewOptions:(CDMPreviewOption)previewOptions
                                                  previewView:(UIView*_Nullable)previewContainer
                                              registrationKey:(NSString*_Nullable)registrationKey
                                                   customData:(NSString*_Nullable)customData;
/**
 Sets the container where the camera preview will be placed.
 @param previewContainer The container where the camera preview will be placed.
 @param completionBlock The block will contain an error when used on connector other than the Phone Camera
 Method is only supported for Phone Camera
 */
- (void)setCameraPreviewContainer:(UIView*_Nullable) previewContainer completion:(void (^_Nullable)(NSError *_Nullable error))completionBlock;

/**
 Get camera exposure compensation range (0: lower value, 1: upper value, 2: step) in the completion block. Camera must to be opened before
 @param completionBlock The block will contain an array with the minimum and maximum exposure values, or an error when used on connector other than the Phone Camera
 The camera needs to be started within cmbSDK at least once to get the camera exposure compensation range
 */
- (void)getCameraExposureCompensationRangeWithCompletion:(void (^_Nonnull)(NSArray<NSNumber *>*_Nullable range, NSError *_Nullable error))completionBlock;

/**
 Sets the camera exposure compensation value
 @param exposureCompensation Float value that will be set as exposure compensation
 @param completionBlock The block will contain an error when used on connector other than the Phone Camera
 */
- (void)setCameraExposureCompensation:(float)exposureCompensation completion:(void (^_Nullable)(NSError * _Nullable error))completionBlock;

/**
 * Connects to the barcode reader.
 * @param completionBlock the block to invoke as the connection process is completed.
 */
- (void) connectWithCompletion:(void (^_Nullable)(NSError *_Nullable error))completionBlock;

/**
 * Disconnects from a connected barcode reader.
 */
- (void) disconnect;

/**
 * Starts triggering
 */
- (void) startScanning;

/**
 * Stops triggering
 */
- (void) stopScanning;

/**
 * Retrieves the current battery percentage level of the reader.
 * @param completionBlock The block to be called as the information is available
 */
- (void) getDeviceBatteryLevelWithCompletion:(void (^_Nonnull)(int batteryLevel, NSError * _Nullable error))completionBlock;

/**
 * Enable or disable the provided symbology on the reader
 * @param symbology The {@link CMBSymbology} to enable or disable
 * @param enabled true to enable, false to disable
 * @param completionBlock The block to be called as the setting completes
 */
- (void) setSymbology:(CMBSymbology)symbology
              enabled:(bool)enabled
           completion:(void (^_Nullable)(NSError *_Nullable error))completionBlock;

/**
 * Retrieves whether the specified symbology is enabled or disabled
 * @param symbology The {@link CMBSymbology} to check
 * @param completionBlock The block to be invoked as the information is available
 */
- (void) isSymbologyEnabled:(CMBSymbology)symbology
                 completion:(void (^_Nonnull)(BOOL enabled, NSError *_Nullable error))completionBlock;

/**
 * Turns on or off all internal lights of the reader
 * @param on true, to turn on the lights, false to turn off the lights
 * @param completionBlock The block to be invoked as the method completes
 */
- (void) setLightsON:(bool)on completion:(void (^_Nonnull)(NSError *_Nullable error))completionBlock;

/**
 * Retrieves whether all lights of the barcode reader are turned on or off.
 * @param completionBlock The block to be invoked as the result is available
 */
- (void) getLightsStateWithCompletion:(void (^_Nonnull)(BOOL enabled, NSError *_Nullable error))completionBlock;

/**
 * Resets the reader configurations to factory default
 * @param completionBlock The block to be invoked as the operation completes
 */
- (void) resetConfigWithCompletion:(void (^_Nonnull)(NSError *_Nullable error))completionBlock;

/**
 * Plays a beep on the reader
 */
- (void) beep;

/**
 * Returns the DataManSystem instance for this CMBReaderDevice
 * @return {@link CDMDataManSystem} instance
 */
- (CDMDataManSystem *_Nonnull)dataManSystem;

@end