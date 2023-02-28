import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

import { SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
const WelcomScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView className="bg-[#01ccbe6b] flex-1 justify-center items-center">
      <Animatable.Image
        animation="slideInUp"
        interationCount={1}
        className="h-96 w-96"
        source={require("../assets/welcome.png")}
      />
      <Animatable.Text
        animation="slideInUp"
        interationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Welcome To Deliveroo..
      </Animatable.Text>
      <TouchableOpacity
        onPress={() => navigate.navigate("LogIn")}
        className="rounded-lg p-4 w-80 bg-[#00CCBB]"
      >
        <Text className="text-center text-white text-lg font-bold">Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate.navigate("SignUp")}
        className="rounded-lg p-4 w-80 bg-[#00CCBB] mt-5"
      >
        <Text className="text-center text-white text-lg font-bold">
          Sign Up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomScreen;
