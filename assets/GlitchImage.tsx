import React from "react";
import { View, Image } from "react-native";

interface GlitchImageProps {
  uri: string;
  width?: number;
  height?: number;
  slices?: number; // nombre de bandes
}

export default function GlitchImage({
  uri,
  width = 300,
  height = 400,
  slices = 12,
}: GlitchImageProps) {
  const sliceHeight = height / slices;

  return (
    <View style={{ width, height, overflow: "hidden" }}>
      {Array.from({ length: slices }).map((_, index) => {
        // Décalage horizontal aléatoire
        const offset = (index % 2 === 0 ? 1 : -1) * (Math.random() * 10);

        return (
          <View
            key={index}
            style={{
              position: "absolute",
              top: index * sliceHeight,
              height: sliceHeight,
              width,
              overflow: "hidden",
              transform: [{ translateX: offset }],
            }}
          >
            <Image
              source={{ uri }}
              style={{
                width,
                height,
                position: "absolute",
                top: -index * sliceHeight,
              }}
              resizeMode="cover"
            />
          </View>
        );
      })}
    </View>
  );
}
