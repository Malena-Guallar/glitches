import GlitchImage from "@/assets/GlitchImage";
import BaseButton from "@/components/ui/base-button";
import { useTheme } from "@/theme/ThemeProvider";
import Slider from "@react-native-community/slider";
import { useKeepAwake } from "expo-keep-awake";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const EditorScreen = () => {
  useKeepAwake();
  const { photoUri } = useLocalSearchParams<{ photoUri?: string }>();
  const router = useRouter();
  const theme = useTheme();

  const [slices, setSlices] = useState<number>(10);
  const [pendingSlices, setPendingSlices] = useState<number>(0);

  if (!photoUri) {
    return (
      <View style={theme.screens}>
        <Text style={theme.textColor}>No photo provided</Text>
        <BaseButton title="Go back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={theme.screens}>
      <GlitchImage uri={photoUri} slices={slices} />
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
      <BaseButton title="Back to camera" onPress={() => router.push("/camera")} />
    </View>
  );
};

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});

export default EditorScreen;
