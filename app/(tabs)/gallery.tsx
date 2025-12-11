import { Image } from "expo-image";
import * as MediaLibrary from "expo-media-library";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const GalleryScreen = () => {
  const router = useRouter();
  const [permission, requestPermission] = MediaLibrary.usePermissions();
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
      return;
    }

    loadPhotos();
  }, [permission]);

  const loadPhotos = async () => {
    const assets = await MediaLibrary.getAssetsAsync({
      mediaType: "photo",
      sortBy: ["creationTime"],
      first: 50,
    });
    setPhotos(assets.assets);
  };

  const openPhoto = (photo: MediaLibrary.Asset) => {
    router.push({
      pathname: "/editor",
      params: { photoUri: photo.uri },
    });
  };


  if (!permission || !permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#fff", textAlign: "center" }}>
          You must allow access to your photos
        </Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text>Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, {paddingTop: 50}]}>
      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => openPhoto(item)}>
            <Image 
              source={{uri: item.uri}}
              style={styles.thumbnail}
              contentFit="cover"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#000" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  thumbnail: {
    width: 120,
    height: 120,
    margin: 2,
    borderRadius: 4,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 6,
  },
});

export default GalleryScreen;
