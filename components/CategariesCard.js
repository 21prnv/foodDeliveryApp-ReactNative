import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategariesCard = (props) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{
          uri: props.imgUrl,
        }}
        className="w-20 h-20 rounded"
      />

      <Text className="font-bold absolute bottom-1 left-1 text-white">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategariesCard;
