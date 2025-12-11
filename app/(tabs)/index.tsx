import GlitchText from "@/assets/GlitchText";
import BaseButton from "@/components/ui/base-button";
import { useTheme } from "@/theme/ThemeProvider";
import { useRouter } from "expo-router";
import { View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View style={theme.screens}>
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

export default HomeScreen;
