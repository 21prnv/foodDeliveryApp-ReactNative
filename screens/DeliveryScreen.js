import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestraurent } from "../features/restraurentSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";
import { Marker } from "react-native-svg";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restraurant = useSelector(selectRestraurent);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between item-centre p-5 mt-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg ">Order Help</Text>
        </View>
        {/* <View>
          <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
           
          </View>
          <Image
            source={{
              uri: "https://links.papareact.com/fls",
            }}
            className="h-20 w-20"
          />
        </View>
        <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
        <Text className="mt-3 text-gray-500">Your Order Is Beign Prepared</Text> */}
        <View className="bg-white mx-4 absolute top-20  rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between ">
            <View>
              <Text className="text-lg text-gray-500">Estimate Arrival</Text>
              <Text className="text-4xl font-bold">40-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your Order Is Beign Prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 16.867634,
          longitude: 74.570389,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 mt-20  z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinates={{
            latitude: 16.867634,
            longitude: 74.570389,
          }}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
