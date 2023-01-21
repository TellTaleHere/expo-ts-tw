import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <View>
      <Text>Hello</Text>
      <TouchableOpacity onPress={() => navigate("/")}>
        <Text>PageIndex</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("/page1")}>
        <Text>Page1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
