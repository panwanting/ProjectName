# FAQ

## com.android.ddmlib.InstallException

```
Installing APK 'app-release.apk' on 'HM 1S - 4.4.4'
08:16:43 E/Device: Error during Sync: timeout.
Unable to install /home/user/workspace/lab/MyApp/android/app/build/outputs/apk/app-release.apk
com.android.ddmlib.InstallException
```

build.gradle

```
classpath 'com.android.tools.build:gradle:1.2.3'
```

```
-Dandroid.adb.connectionTimeout=10000
```

