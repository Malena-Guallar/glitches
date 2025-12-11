import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface BaseButtonProps {
  title: string;
  onPress: () => void;
}

const BaseButton = ({ title, onPress }: BaseButtonProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={{...theme.button.container}}>
      <Text style={{...theme.button.text}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BaseButton;
