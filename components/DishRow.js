import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeToBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, price, discription, imagelink }) => {
  const [isPressed, setisPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, discription, price, imagelink }));
  };

  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeToBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        className={`bg-white border border-gray-200 p-4 ${
          isPressed && "border-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <View>
              <Text className="text-lg font-bold mb-1">{name}</Text>
              <Text className="text-gray-500">{discription}</Text>
              <Text className="text-gray-400 mt-2">₹{price}</Text>
            </View>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: imagelink,
              }}
              className="h-20 bg-gray-300 w-20"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-centre space-x-2 pb-2">
            <TouchableOpacity onPress={removeItemsFromBasket}>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text className="pt-1 font-bold text-lg">{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
