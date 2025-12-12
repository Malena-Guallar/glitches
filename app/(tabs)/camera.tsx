import { useTheme } from "@/theme/ThemeProvider";
import { MaterialIcons } from "@expo/vector-icons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

const CameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const router = useRouter();
  const theme = useTheme();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>we need your permission to use camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const toggleFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    if (photo?.uri) {
      setUri(photo.uri);
      router.push({
        pathname: "/editor",
        params: { photoUri: photo.uri },
      });
    }
  };

  return (
    <View style={{...theme.camera.container}}>
      {uri ? (
        <View>
          <Image source={{ uri }} style={{ width: 300, aspectRatio: 1 }} />
          <Button onPress={() => setUri(null)} title="Take another pic" />
        </View>
      ) : (
        <View style={{...theme.camera.container}}>
          <CameraView
            style={{...theme.camera.camera}}
            facing={facing}
            ref={ref}
            mode="picture"
          />
          <View style={{...theme.camera.buttonContainer}}>
            <TouchableOpacity onPress={toggleFacing}>
              <MaterialIcons
                name="flip-camera-android"
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <View style={{ ...theme.camera.shutterBtn }}>
                <View style={{ ...theme.camera.shutterBtnInner }}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/gallery")}>
              <MaterialIcons name="photo-library" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};


export default CameraScreen;
