*##############################################################################################

Buildar:
	# cordova build --release android

Alinhar:
	# cd "C:\Users\Jaquisson\Documents\Ionic\DirectZapp\platforms\android\app\build\outputs\apk\release\"
	# C:\Users\Jaquisson\AppData\Local\Android\Sdk\build-tools\27.0.3\zipalign -v 4 app-release-unsigned.apk DirectZapp.apk


Assinar:
	# jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\Users\Jaquisson\Documents\Ionic\DirectZapp\platforms\android\DirectWhatsapp.keystore C:\Users\Jaquisson\Documents\Ionic\DirectZapp\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk DirectWhatsapp

*##############################################################################################