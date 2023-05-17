# Projeto React Native com Redux Toolkit e TypeScript

Este é um guia passo a passo sobre como executar este aplicativo React Native desenvolvido com Redux Toolkit e TypeScript em seu dispositivo.

## Informações do Projeto

Este projeto foi desenvolvido utilizando as seguintes tecnologias e versões:

- React v18
- React Native v0.71
- Redux Toolkit v1.9
- Redux Persist v6.0
- Typescript v4.9

O Redux Toolkit foi utilizado para gerenciar o estado da aplicação e o Redux Persist foi utilizado para persistir o estado da aplicação.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em seu sistema:

- Node.js (v16.0.0 ou superior)
- npm (v6.0.0 ou superior)
- Yarn (v1.22.0 ou superior)
- Android Studio (para Android)
- Xcode (para iOS)
- JDK (Java Development Kit)

## Configuração do Ambiente

Siga as instruções de configuração do ambiente React Native em [Setting up the development environment](https://reactnative.dev/docs/environment-setup).

## Instalação

1. Clone este repositório para sua máquina local usando `git clone git@github.com:5ucr4m/pede.ai.git`.

2. Navegue até o diretório do projeto usando `cd pede.ai` (Ou o nome do diretório definido no momento da clonagem).

3. Instale todas as dependências do projeto usando `yarn install`.

## Executando o Aplicativo

### Android

1. Certifique-se de que você tem um dispositivo Android conectado ao seu PC ou um emulador Android em execução.

2. Execute o comando `yarn android` para iniciar o aplicativo em seu dispositivo/emulador Android.

### iOS

1. Certifique-se de que você tem um dispositivo iOS para utlizar com a leitura do QRCode ou um simulador iOS em execução.

2. Execute o comando `yarn ios` para iniciar o aplicativo em seu simulador iOS. Caso seja um dispositivo físico, utilize o comando `yarn start` para iniciar o Metro Bundler e escanear o QRCode com a câmera do seu dispositivo.

## Testes

Para executar os testes, use o comando `yarn test`.