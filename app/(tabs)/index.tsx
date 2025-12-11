import BaseButton from "@/components/ui/base-button";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GLITCHES</Text>

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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    color: "#fff",
  },
});

export default HomeScreen;
