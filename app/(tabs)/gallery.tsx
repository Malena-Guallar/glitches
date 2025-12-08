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

const GalleryScreen = () => {
  const router = useRouter();
  const [permission, requestPermission] = MediaLibrary.usePermissions();
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);

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

  const renderItem = ({ item }: { item: MediaLibrary.Asset }) => {
    return (
      <TouchableOpacity onPress={() => openPhoto(item)}>
        <Image source={{ uri: item.uri }} style={{ width: 120, height: 120 }} />
      </TouchableOpacity>
    );
  };

  const openPhoto = (photo: MediaLibrary.Asset) => {
    router.push({
      pathname: "/editor",
      params: { photoUri: photo.uri },
    });
  };

  if (!permission || !permission.granted) {
    return (
        <View>
            <Text>You must allow access to your photos</Text>
            <TouchableOpacity onPress={requestPermission}>
                <Text>Grant permission</Text>
            </TouchableOpacity>
        </View>
    )
  };

  return (
    <View style={styles.container}>
        <FlatList 
            data={photos}
            numColumns={3}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
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
  },
});

export default GalleryScreen;
