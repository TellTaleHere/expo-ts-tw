import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const PageMain = () => {
  const tw = useTailwind();
  return (
    <View style={tw("p-2 rounded bg-blue-400")}>
      <Text style={tw("font-bold")}>
        Hello Main sfsdfsd fsdf sd fs df sdfs dfsdfsdfsdfs dfsdf sdfsdfsdfsdfsdf
        sdfsdfsdfsdf sdfsdfsdf sdfsdfsdf{" "}
      </Text>
    </View>
  );
};

export default PageMain;
