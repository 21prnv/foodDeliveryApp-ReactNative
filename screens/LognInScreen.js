import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  EnvelopeIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const LognInScreen = () => {
  const navigate = useNavigation();

  const [fdata, setFdata] = useState({
    email: "",
    password: "",
  });
  const [errormsg, setErrormsg] = useState(null);

  const sendToBackend = () => {
    if (fdata.email == "" || fdata.password == "") {
      setErrormsg("All Fields Are Rquired");
    } else {
      fetch("https://deliveroo-backend-9utr.onrender.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fdata),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setErrormsg(data.error);
          } else {
            navigate.navigate("Home");
          }
        });
    }
  };
  return (
    <SafeAreaView className="bg-[#01ccbe6b] flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={navigate.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <Animatable.Image
        animation="slideInUp"
        interationCount={1}
        className="h-72 w-72 mt-20 z-0"
        source={require("../assets/login.png")}
      />
      <ScrollView className="bg-white h-3/5 rounded-t-3xl w-full mb-0 z-10">
        <View className="text-center">
          <Text className="text-center font-bold text-xl mt-4 mb-1">
            Welcome Back
          </Text>
          <Text className="font-bold mb-5 text-gray-400 text-xs text-center">
            Dont Have Account{" "}
            <Text
              onPress={() => navigate.navigate("SignUp")}
              className="text-[#00CCBB]"
            >
              Sign Up
            </Text>
          </Text>
        </View>
        {errormsg ? (
          <Text className="font-bold text-lg text-center mb-5 text-red-600">
            {errormsg}
          </Text>
        ) : null}
        <View className="items-center gap-5">
          <View className="flex-row w-80 h-16 rounded-xl items-center  space-x-3 p-2 bg-gray-200">
            <EnvelopeIcon color="#00CCBB" size={25} />
            <TextInput
              placeholder="Enter Your Email"
              keyboardType="email-address"
              onChangeText={(text) =>
                setFdata({
                  ...fdata,
                  email: text,
                })
              }
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View className="flex-row w-80 h-16 rounded-xl items-center  space-x-3 p-2 bg-gray-200">
            <ShieldCheckIcon color="#00CCBB" size={25} />
            <TextInput
              placeholder="Enter Your Password"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(text) =>
                setFdata({
                  ...fdata,
                  password: text,
                })
              }
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <TouchableOpacity
            className="rounded-lg p-4 w-80 bg-[#00CCBB]"
            onPress={() => sendToBackend()}
          >
            <Text className="text-center text-white text-lg font-bold">
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LognInScreen;
