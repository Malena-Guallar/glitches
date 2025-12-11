import { TextStyle, ViewStyle } from "react-native";

export const theme = {
  colors: {
    background: "#0d0d0d",
    surface: "#1a1a1a",
    primary: "#ff006e",
    primaryLight: "#ff66a1",
    text: "#ffffff",
    textSecondary: "#9e9e9e",
    border: "#333",
  },

  // spacing: {
  //   xs: 4,
  //   sm: 8,
  //   md: 16,
  //   lg: 24,
  //   xl: 32,
  // },

  // radius: {
  //   sm: 6,
  //   md: 12,
  //   lg: 20,
  //   full: 999,
  // },

  typography: {
    title: {
      fontSize: 32,
      fontWeight: "700",
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "500",
    },
    body: {
      fontSize: 16,
      fontWeight: "400",
    },
  },

  button: {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 10,
      backgroundColor: "transparent",
      width: "50%",
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 10,
    } as ViewStyle,
    text: {
      color: "#fff",
    } as TextStyle,
  },
};
