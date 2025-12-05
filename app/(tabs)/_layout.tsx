import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#0a84ff",
        tabBarInactiveTintColor: "#6b7280",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Camera" }}></Tabs.Screen>
      <Tabs.Screen name="editor" options={{ title: "Editor" }}></Tabs.Screen>
      <Tabs.Screen name="gallery" options={{ title: "Gallery" }}></Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;
