package com.InnovaZones.RNTreeIZHips;

import android.app.Application;

import androidx.multidex.MultiDex;

import com.facebook.react.ReactApplication;
import com.cmb.RCTCmbSdkPackage;
import io.sentry.react.RNSentryPackage;
import com.masteratul.RNAppstoreVersionCheckerPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import org.wonday.pdf.RCTPdfView;
import com.rpt.reactnativecheckpackageinstallation.CheckPackageInstallationPackage;
import com.github.wumke.RNLocalNotifications.RNLocalNotificationsPackage;
import com.johnsonsu.rnsoundplayer.RNSoundPlayerPackage;
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;
import com.microsoft.codepush.react.CodePush;
import br.com.classapp.RNSensitiveInfo.RNSensitiveInfoPackage;

import com.psykar.cookiemanager.CookieManagerPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactlibrary.RNUUIDGeneratorPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.corbt.keepawake.KCKeepAwakePackage;
import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.microsoft.codepush.react.ReactInstanceHolder;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.rnfs.RNFSPackage;
import com.rnziparchive.RNZipArchivePackage;
import com.rssignaturecapture.RSSignatureCapturePackage;
import com.scandit.reactnative.ScanditPackage;
import com.toast.RCTToastPackage;
import com.uk.tsl.rfid.asciiprotocol.AsciiCommander;
import com.uk.tsl.rfid.asciiprotocol.device.ReaderManager;

import org.pgsqlite.SQLitePluginPackage;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final MyReactNativeHost mReactNativeHost = new MyReactNativeHost(this);


  @Override
  public void onCreate() {
    CodePush.setReactInstanceHolder(mReactNativeHost);
    super.onCreate();
    MultiDex.install(getBaseContext());
    SoLoader.init(this, /* native exopackage */ false);
  }


  public class MyReactNativeHost extends ReactNativeHost implements ReactInstanceHolder {

    Application mApplication;

    public MyReactNativeHost(Application application) {
      super(application);
      mApplication = application;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
            new RCTCmbSdkPackage(),
            new RNSentryPackage(),
              new RNAppstoreVersionCheckerPackage(),
              new ReactNativePushNotificationPackage(),
              new RCTPdfView(),
              new CheckPackageInstallationPackage(),
              new CustomReactPackage(),
              new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
              new AppCenterReactNativeCrashesPackage(MainApplication.this, getResources().getString(R.string.appCenterCrashes_whenToSendCrashes)),
              new AppCenterReactNativeAnalyticsPackage(MainApplication.this, getResources().getString(R.string.appCenterAnalytics_whenToEnableAnalytics)),
              new AppCenterReactNativePackage(MainApplication.this),
              new RNSoundPlayerPackage(),
              new ReactVideoPackage(),
              new RNDeviceInfo(),
              new RNSensitiveInfoPackage(),
              new AsyncStoragePackage(),
              new RNZipArchivePackage(),
              new RNFetchBlobPackage(),
              new CookieManagerPackage(),
              new RNUUIDGeneratorPackage(),
              new RNFSPackage(),
              new RSSignatureCapturePackage(),
              new KCKeepAwakePackage(),
              new SQLitePluginPackage(),
              new RCTToastPackage(),
              new PickerPackage(),
              new RNLocalNotificationsPackage(),
              new RNSpinkitPackage(),
              new ScanditPackage()
      );
    }
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }
}
