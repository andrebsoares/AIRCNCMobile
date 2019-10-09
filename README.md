# MobileAIRCNC
MobileAIRCNC


Problema de conexão do Expo com o App mobile:
Uncaught Error: Java.net,sockettimeoutException: failed to connect to after 10000ms

Artigo com a resolução: https://github.com/react-community/create-react-native-app/issues/144

Pegar o IP (atenção se estiver usando Wifi pegue dele), IPv4 Address.
-> ipconfig

Na pasta raiz do Aplicativo executar o seguinte comando no CMD, trocando "my-custom-ip-address" pelo IPv4 Address:
-> set REACT_NATIVE_PACKAGER_HOSTNAME=my-custom-ip-address

E executar: 
-> expo start
