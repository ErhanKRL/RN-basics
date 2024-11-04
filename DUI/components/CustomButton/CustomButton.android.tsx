import React from "react";
import { Pressable, Text } from "react-native";

export const CustomButton = ({title, onPress}: {title: string, onPress: () => void}) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: 5,
      padding: 10,
    }}
  >
    <Text style={{ color: "blue", fontSize: 18 }}>{title}</Text>
  </Pressable>
);