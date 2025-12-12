import GlitchImage from "@/assets/GlitchImage";
import BaseButton from "@/components/ui/base-button";
import { useTheme } from "@/theme/ThemeProvider";
import Slider from "@react-native-community/slider";
import { useKeepAwake } from "expo-keep-awake";
import * as MediaLibrary from "expo-media-library";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Alert, Text, View } from "react-native";
import ViewShot, { captureRef } from "react-native-view-shot";

const EditorScreen = () => {
  useKeepAwake();
  const { photoUri } = useLocalSearchParams<{ photoUri?: string }>();
  const router = useRouter();
  const theme = useTheme();

  const [slices, setSlices] = useState<number>(10);
  const [pendingSlices, setPendingSlices] = useState<number>(0);

  const viewShotRef = useRef<ViewShot>(null);

  if (!photoUri) {
    return (
      <View style={theme.screens}>
        <Text style={theme.textColor}>No photo provided</Text>
        <BaseButton title="Go back" onPress={() => router.back()} />
      </View>
    );
  }

  const saveImage = async () => {
    try {
      // 1 demander la permission si besoin
      const response = await MediaLibrary.requestPermissionsAsync();
      if (!response.granted) {
        Alert.alert("Permission required, please grant permission");
        return;
      }
      // 2 capturer la vue dans un fichier temporaire
      const uri = await captureRef(viewShotRef, {
        format: "png",
        quality: 1,
        result: "tmpfile",
      });

      if (!uri) {
        Alert.alert("Capture failed");
        return;
      }

      // 3 sauvegarder dans la librairie
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert("Image saved !");
    } catch (error) {
      console.error("save image error : ", error);
      Alert.alert("An error occured while saving image");
    }
  };

  return (
    <View style={theme.screens}>
      <ViewShot ref={viewShotRef} options={{ format: "png", quality: 1 }}>
        <GlitchImage uri={photoUri} slices={slices} />
      </ViewShot>
      <Text style={theme.textColor}>Slices : {pendingSlices}</Text>
      <Slider
        style={{ width: 250, height: 40 }}
        minimumValue={1}
        maximumValue={1000}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        value={slices}
        onValueChange={setPendingSlices}
        onSlidingComplete={(v) => setSlices(Math.floor(v))}
      />
      <BaseButton title="Save to gallery" onPress={saveImage} />
      <BaseButton
        title="Back to camera"
        onPress={() => router.push("/camera")}
      />
    </View>
  );
};

export default EditorScreen;
