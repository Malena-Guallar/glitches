import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#0a84ff",
        tabBarInactiveTintColor: "#6b7280",
      }}
    >
      <Tabs.Screen name="index" options={{
        title: "Home",
        headerShown: false
      }}/>
      <Tabs.Screen name="camera" options={{ title: "Camera" }}></Tabs.Screen>
      <Tabs.Screen name="gallery" options={{ title: "Gallery" }}></Tabs.Screen>
      <Tabs.Screen name="editor" options={{ 
        href: null,
        headerShown: false
       }}></Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;
