import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  removeToBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { selectRestraurent } from "../features/restraurentSlice";
import { XCircleIcon } from "react-native-heroicons/solid";

const BasketScreen = () => {
  const navigate = useNavigation();
  const restraurent = useSelector(selectRestraurent);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const fees = 20;
  const dispatch = useDispatch();
  const [groupItems, setGroupItems] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItems(groupedItems);
  }, [items]);
  console.log(groupItems);
  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeToBasket({ id }));
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 mt-5 border-b border-[#00CCBB] bg-white shadow">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text>{restraurent.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigate.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 p-4 rounded-full bg-gray-300"
          />
          <Text className="flex-1">Deliver In 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItems).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{
                  uri: items[0]?.imagelink,
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">{items[0]?.price}</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeToBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <ScrollView>
          <View className="p-5 bg-white mt-56 space-y-4">
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Subtotal</Text>
              <Text className="text-gray-400">₹{basketTotal}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Delivery Fees</Text>
              <Text className="text-gray-400">₹{fees}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-extrabold">Order Total</Text>
              <Text className="font-extrabold">₹{fees + basketTotal}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigate.navigate("PreparingOrderScreen")}
              className="rounded-lg p-4 bg-[#00CCBB]"
            >
              <Text className="text-center text-white text-lg font-bold">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
