# 📸 Glitches — Photo Glitcher App (Expo + React Native)

Glitches est une application mobile Android permettant de :
- prendre une photo,
- sélectionner une image depuis la galerie,
- lui appliquer un effet glitch dynamique,
- sauvegarder l'image glitchée sur le téléphone.

_React Native • Expo • TypeScript_

<p> <img src="https://img.shields.io/badge/Expo- SDK_51-black?logo=expo&style=for-the-badge" /> <img src="https://img.shields.io/badge/React_Native-Mobile-blue?logo=react&style=for-the-badge" /> <img src="https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript&style=for-the-badge" /> <img src="https://img.shields.io/badge/EAS_Build-Required-important?logo=expo&style=for-the-badge" /> <img src="https://img.shields.io/badge/Platform-Android-lightgreen?logo=android&style=for-the-badge" /> </p>
<br>
<br>

## ✨ Fonctionnalités

- 📷 Capture photo via appareil (Expo Camera)
- 🖼️ Sélection depuis la galerie (Media Library)
- 🎚️ Effet glitch paramétrable (slider interactif)
- 💾 Sauvegarde locale de l’image glitchée
- 🧭 Navigation fluide via Expo Router
- 🎨 Mode thème custom (ThemeProvider)
- ⚡ Full support Dev Build / EAS Build
<br>
<br>

## 📦 Stack technique

- Expo SDK
- React Native + TypeScript
- expo-router
- expo-camera
- expo-media-library
- expo-file-system
- react-native-view-shot
- @react-native-community/slider
<br>
<br>


## 🚀 Installation & Lancement du projet

### 1. Cloner le projet
```
git clone https://github.com/Malena-Guallar/glitches.git
cd glitches
```

### 2. Installer les dépendances
```
npm install
# ou
yarn install
```

### 3. Télécharger l’APK ici et l'installer sur le téléphone :
[Cliquer ici](https://www.swisstransfer.com/d/2e178545-da08-4af2-ab3c-6991631a4ce2)

### 4. Démarrer le projet
```
npx expo start
```
Scanner le QR code depuis l'app installée sur le téléphone.
<br>
<br>

## Architecture du projet

```
📦 glitches/
 ┣ 📁 app/
 ┃ ┣ 📁 (tabs)/
 ┃ ┃ ┣ _layout.tsx
 ┃ ┃ ┣ camera.tsx
 ┃ ┃ ┣ editor.tsx
 ┃ ┃ ┣ gallery.tsx
 ┃ ┃ ┗ index.tsx
 ┃ ┗ _layout.tsx
 ┣ 📁 components/
 ┃ ┗ ui/base-button.tsx
 ┣ 📁 theme/
 ┃ ┣ ThemeProvider.tsx
 ┃ ┗ theme.ts
 ┣ 📁 assets/
 ┃ ┣ GlitchText.tsx
 ┃ ┗ GlitchImage.tsx
 ┣ app.json
 ┣ eas.json
 ┣ package.json
 ┗ README.md
```
