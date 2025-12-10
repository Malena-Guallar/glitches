import { Image } from "expo-image";
import { useKeepAwake } from "expo-keep-awake";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EditorScreen = () => {
  useKeepAwake();
  const { photoUri } = useLocalSearchParams<{ photoUri?: string }>();
  const router = useRouter();

  const [effect, setEffect] = useState<"none" | "rgb" | "pixel" | "blur">("none");

  if (!photoUri) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No photo provided</Text>
        <Button title="Go back" onPress={() => router.back()} />
      </View>
    );
  }

  const applyEffect = (type: typeof effect) => setEffect(type);

  const getEffectStyle = (): any => {
    switch (effect) {
      case "rgb":
        return { tintColor: "rgba(255,0,0,0.2)" }; // simple overlay pour simuler RGB shift
      case "pixel":
        return { transform: [{ scale: 0.95 }] }; // effet visuel très simple pour pixelate
      case "blur":
        return { blurRadius: 10 }; // fonctionnera sur iOS, simule flou sur Android via overlay
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: photoUri }}
          style={[styles.image, getEffectStyle()]}
          contentFit="contain"
          transition={300}
        />
        {/* Overlay pour simuler le flou sur Android */}
        {effect === "blur" && (
          <View style={styles.blurOverlay} pointerEvents="none" />
        )}
      </View>

      <View style={styles.buttons}>
        {["none", "rgb", "pixel", "blur"].map((e) => (
          <TouchableOpacity
            key={e}
            onPress={() => applyEffect(e as typeof effect)}
            style={styles.btn}
          >
            <Text>{e}</Text>
          </TouchableOpacity>
        ))}
      </View>

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
  imageWrapper: {
    width: "90%",
    height: 400,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.2)", // effet visuel de flou
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
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
