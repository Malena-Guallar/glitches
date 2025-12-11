import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

interface GlitchTextProps {
  text: string;
  fontSize?: number;
  color?: string;
}

export default function GlitchText({
  text,
  fontSize = 40,
  color = "#fff",
}: GlitchTextProps) {
  const offset = useSharedValue(0);

  // Animation glitch
  offset.value = withRepeat(
    withTiming(3, { duration: 70 }),
    -1, // infinite
    true
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Couche rouge décalée */}
      <Animated.Text
        style={[
          styles.glitch,
          {
            fontSize,
            color: "red",
            transform: [{ translateX: -3 }],
          },
        ]}
      >
        {text}
      </Animated.Text>

      {/* Couche bleue décalée */}
      <Animated.Text
        style={[
          styles.glitch,
          {
            fontSize,
            color: "cyan",
            transform: [{ translateX: 1 }],
          },
        ]}
      >
        {text}
      </Animated.Text>

      {/* Texte principal animé */}
      <Animated.Text
        style={[styles.mainText, { fontSize, color }, animatedStyle]}
      >
        {text}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  glitch: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.5,
  },
  mainText: {
    fontWeight: "bold",
  },
});
