import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BaseButtonProps {
  title: string;
  onPress: () => void;
}

const BaseButton = ({ title, onPress }: BaseButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "transparent",
    width: "50%",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff"
  }
});

export default BaseButton;
