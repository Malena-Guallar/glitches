import GlitchText from "@/assets/GlitchText";
import BaseButton from "@/components/ui/base-button";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <GlitchText text="GLITCHES" fontSize={40} />

      <BaseButton
        title="Open camera"
        onPress={() => router.push("/camera")}
      />

      <BaseButton
        title="Open gallery"
        onPress={() => router.push("/gallery")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    color: "#fff",
  },
});

export default HomeScreen;
