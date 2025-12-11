import { useTheme } from "@/theme/ThemeProvider";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0a84ff",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: theme.backgroundColor,        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen name="camera" options={{ title: "Camera", headerShown: false }}></Tabs.Screen>
      <Tabs.Screen name="gallery" options={{ title: "Gallery", headerShown: false}}></Tabs.Screen>
      <Tabs.Screen
        name="editor"
        options={{
          href: null,
          headerShown: false,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;
