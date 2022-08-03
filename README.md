# Bug expo

The emulator are both in Dark mode in the setting of the OS

```
	const color = useColorScheme()
	console.log(Platform.OS, color)
```

return :

when using expo-dev (`expo start --dev-client`):

- on iOS : `ios, light`
- on Android : `android, dark`

when using ExpoGo (`expo start`):

- on iOS : `ios, light`
- on Android : `android, light`

resulting in the error on the stripe form

# Expecting

expect the code to return a consistant result on both ios/android and ExpoGo/Expo-dev for the colorScheme of the OS.
