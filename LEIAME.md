*##############################################################################################
Firebase Deploy:
	npm run build
	firebase deploy	

Rodar:
	cordova run android --livereload

Buildar:
	1º	ionic cordova prepare android 
	2º	ionic cordova build --release android

Assinar:
	3º	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/Downloads/deletar/DIRECTZAPP-IONIC/platforms/android/DirectZapp.keystore ~/Downloads/deletar/DIRECTZAPP-IONIC/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk DirectZapp

Alinhar:
	4º	/opt/android/android-sdk-linux/build-tools/android-10/./zipalign -v 4 "/home/jaquisson/Downloads/deletar/DIRECTZAPP-IONIC/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk" "/home/jaquisson/Downloads/deletar/DIRECTZAPP-IONIC/platforms/android/app/build/outputs/apk/release/app-release-signed.apk"

[GET INFO KEYSTORE]
keytool -list -v -keystore ~/Downloads/deletar/DIRECTZAPP-IONIC/platforms/android/DirectZapp.keystore -alias DirectZapp -storepass 9********A -keypass 9********A
keytool -list -v -keystore ~/Downloads/deletar/DIRECTZAPP-IONIC/platforms/android/DirectWhatsapp.keystore -alias DirectWhatsapp -storepass 9********A -keypass 9********A

*##############################################################################################