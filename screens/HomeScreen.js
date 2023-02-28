import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categaries from "../components/Categaries";
import FeaturedRow from "../components/FeaturedRow";
import FeaturedRow1 from "../components/FeaturedRow1";
import FeaturedRow2 from "../components/FeaturedRow2";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-1">
      <View className="flex-row pb-3 mx-2 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-5 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={18} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-3">
        <View className="flex-row flex-1 space-x-1 p-2 bg-gray-200">
          <MagnifyingGlassIcon color="#00CCBB" size={25} />
          <TextInput
            placeholder="Search For Restrorent"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" size={30} />
      </View>
      {/* Body */}

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categaries */}
        <Categaries />

        {/* Featured */}
        <FeaturedRow
          id="12"
          title="Featured"
          description="Paid Placements For Our Partners"
        />
        <FeaturedRow1
          id="123"
          title="Tasty Discount"
          description="Everyone Enjoying Their Jucy Discount"
        />
        <FeaturedRow2
          id="1234"
          title="Offers Near You!"
          description="Why Not Support Your Local Discount Near You"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
