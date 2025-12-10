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

  const [slices, setSlices] = useState<number>(10);
  const [pendingSlices, setPendingSlices] = useState<number>(0);

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
      <Text style={styles.text}>Slices : {pendingSlices}</Text>
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
