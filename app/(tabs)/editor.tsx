import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EditorScreen = () => {
  const { photoUri } = useLocalSearchParams<{ photoUri?: string }>();
  const router = useRouter();

  const [effect, setEffect] = useState<"none" | "rgb" | "pixel" | "blur">(
    "none"
  );

  if (!photoUri) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>no photo provided</Text>
        <Button title="Go back" onPress={() => router.back()} />
      </View>
    );
  }

  const applyEffect = (type: typeof effect) => {
    setEffect(type);
  };

  return (
    <View>
      <Text>editor</Text>
      <Image
        source={{ uri: photoUri }}
        style={styles.image}
        contentFit="contain"
        transition={300}
        blurRadius={effect === "blur" ? 12 : 0}
      ></Image>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => applyEffect("none")}
          style={styles.btn}
        >
          <Text>No Effect</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyEffect("rgb")} style={styles.btn}>
          <Text>RGB Shift</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => applyEffect("pixel")}
          style={styles.btn}
        >
          <Text>Pixelate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => applyEffect("blur")}
          style={styles.btn}
        >
          <Text>Blur</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: "90%",
    height: 400,
    backgroundColor: "#000",
    borderRadius: 12,
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
