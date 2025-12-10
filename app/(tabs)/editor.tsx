import GlitchImage from "@/assets/GlitchImage";
import Slider from "@react-native-community/slider";
import { useKeepAwake } from "expo-keep-awake";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const EditorScreen = () => {
  useKeepAwake();
  const { photoUri } = useLocalSearchParams<{ photoUri?: string }>();
  const router = useRouter();

  const [slices, setSlices] = useState<number>(100);

  if (!photoUri) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No photo provided</Text>
        <Button title="Go back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GlitchImage uri={photoUri} slices={slices} />
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
      />
      <Button title="Back to camera" onPress={() => router.push("/")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

export default EditorScreen;
