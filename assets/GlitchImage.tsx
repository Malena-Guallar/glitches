import React, { useMemo } from "react";
import { Image, View } from "react-native";

interface GlitchImageProps {
  uri: string;
  width?: number;
  height?: number;
  slices?: number;
}

export default function GlitchImage({
  uri,
  width = 300,
  height = 400,
  slices = 1,
}: GlitchImageProps) {
  const sliceHeight = height / slices;

  const offsets = useMemo(
    () =>
      Array.from({ length: slices }).map(
        (_, i) => (i % 2 === 0 ? 1 : -1) * (Math.random() * 20)
      ),
    [slices]
  );

  return (
    <View style={{ width, height, overflow: "hidden" }}>
      {Array.from({ length: slices }).map((_, index) => (
        <View
          key={index}
          style={{
            position: "absolute",
            top: index * sliceHeight,
            height: sliceHeight,
            width,
            overflow: "hidden",
            transform: [{ translateX: offsets[index] }],
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
      ))}
    </View>
  );
}
