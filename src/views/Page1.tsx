import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

const Page1 = () => {
  const tw = useTailwind();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={tw("justify-center items-center bg-red-200 p-10")}>
      <Text>Page 1 </Text>
      <TouchableOpacity style={{ paddingTop: 10 }}>
        <Text>button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw("bg-green-300 p-10")}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text>X</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        style={{ backgroundColor: "red" }}
      >
        <View style={tw("h-full p-10")}>
          <Text>this Modal</Text>
          <TouchableOpacity
            style={tw("bg-green-900 p-10")}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Page1;
