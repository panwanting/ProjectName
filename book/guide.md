# 新手指南

## 安裝 Android 模擬器

建議使用 Genymotion 模擬器（執行速度較快）：

https://www.genymotion.com/thank-you-freemium/

中文安裝教學：

https://briian.com/15110/genymotion.html

## 設置 Android 模擬器

假設我們在 Host（實體主機）透過 Genymotion 運行 Android x86 模擬器，並透過 VM Guest 的開發環境連線到 Host。

先在 Host 列出裝置清單：

```
adb devices
```

執行結果如下：

```
List of devices attached
192.168.XXX.XXX:5555	device
```

然後在 Guest 連線至指定裝置（使用 Host 的 IP 位址）：

```
adb connect 192.168.XXX.XXX:5555
```

## 建立並執行 React Native 專案

建立新專案：

```
react-native init MyApp
```

建置並執行：

```
react-native run-android
```

