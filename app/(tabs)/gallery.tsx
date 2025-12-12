import BaseButton from "@/components/ui/base-button";
import { useTheme } from "@/theme/ThemeProvider";
import { Image } from "expo-image";
import * as MediaLibrary from "expo-media-library";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const GalleryScreen = () => {
  const router = useRouter();
  const [permission, requestPermission] = MediaLibrary.usePermissions();
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  useEffect(() => {
    if (permission === null) return;
    if (permission.granted) {
      loadPhotos();
    }
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

  if (permission === null) {
    return (
      <View style={theme.screens}>
        <Text style={theme.textColor}>Checking permission...</Text>
      </View>
    );
  }
  if (!permission.granted) {
    return (
      <View style={theme.screens}>
        <Text style={theme.textColor}>
          You must allow access to your photos
        </Text>
        <BaseButton onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

    return (
      <View style={[theme.screens, { paddingTop: 50 }]}>
        <FlatList
          data={photos}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openPhoto(item)}>
              <Image
                source={{ uri: item.uri }}
                style={{...theme.gallery.thumbnail}}
                contentFit="cover"
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  
};

export default GalleryScreen;
