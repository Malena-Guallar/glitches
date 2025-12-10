import GlitchImage from "@/assets/GlitchImage";
import { useKeepAwake } from "expo-keep-awake";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const EditorScreen = () => {
  useKeepAwake();
  const { photoUri } = useLocalSearchParams<{ photoUri?: string }>();
  const router = useRouter();

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
      <GlitchImage uri={photoUri} slices={200} />

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
