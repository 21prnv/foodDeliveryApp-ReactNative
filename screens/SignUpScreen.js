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
  LockClosedIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigate = useNavigation();
  const [fdata, setFdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errormsg, setErrormsg] = useState(null);
  const SendToBackend = () => {
    if (
      fdata.name == "" ||
      fdata.email == "" ||
      fdata.password == "" ||
      fdata.cpassword == ""
    ) {
      setErrormsg("⁕All Fields Are Required");
      return;
    } else {
      if (fdata.password != fdata.cpassword) {
        setErrormsg("Password Must Be Same");
        return;
      } else {
        fetch("https://deliveroo-backend-9utr.onrender.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fdata),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.error) {
              setErrormsg(data.error);
            } else {
              alert("Account Created Succefully");
              navigate.navigate("LogIn");
            }
          });
      }
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
        source={require("../assets/signup.png")}
      />
      <ScrollView className="bg-white h-3/5 rounded-t-3xl w-full mb-0 z-10">
        <View className="text-center">
          <Text className="text-center font-bold text-xl mt-4 mb-1">
            Create An Account
          </Text>
          <Text className="font-bold mb-3 text-gray-400 text-xs text-center">
            Already Have Account{" "}
            <Text
              onPress={() => navigate.navigate("LogIn")}
              className="text-[#00CCBB]"
            >
              Log In
            </Text>
          </Text>
          {errormsg ? (
            <Text className="font-bold text-lg text-center mb-5 text-red-600">
              {errormsg}
            </Text>
          ) : null}
        </View>

        <View className="items-center gap-5">
          <View className="flex-row w-80 h-16 rounded-xl items-center  space-x-3 p-2 bg-gray-200">
            <UserCircleIcon color="#00CCBB" size={25} />
            <TextInput
              placeholder="Enter Your User Name"
              keyboardType="text"
              onChangeText={(text) => setFdata({ ...fdata, name: text })}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View className="flex-row w-80 h-16 rounded-xl items-center  space-x-3 p-2 bg-gray-200">
            <EnvelopeIcon color="#00CCBB" size={25} />
            <TextInput
              placeholder="Enter Your Email"
              keyboardType="email-address"
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View className="flex-row w-80 h-16 rounded-xl items-center  space-x-3 p-2 bg-gray-200">
            <LockClosedIcon color="#00CCBB" size={25} />
            <TextInput
              placeholder="Enter Your Password"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View className="flex-row w-80 h-16 rounded-xl items-center  space-x-3 p-2 bg-gray-200">
            <ShieldCheckIcon color="#00CCBB" size={25} />
            <TextInput
              placeholder="Confirm Your Password"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <TouchableOpacity
            className="rounded-lg p-4 w-80 bg-[#00CCBB] mb-10"
            onPress={() => {
              SendToBackend();
            }}
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
