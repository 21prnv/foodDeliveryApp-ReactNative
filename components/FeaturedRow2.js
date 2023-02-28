import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrorentCards from "./RestrorentCards";

const FeaturedRow2 = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-3">
        <Text className="font-bold text-lg"> {title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-gray-500 px-3 text-xs">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestrorentCards
          id={123}
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jtqv9gvwxxucgcqb7nlv"
          title="Hotel Palavi"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Behind bharti hospital, Kupwad, sangli, Midc Industrial Area"
          dishesh={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hgzrmbfukohyhkaqpnig"
          title="Ajwaa Restraurent"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Vishrambag, Nishant Colony"
          dishesh={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb"
          title="KFC"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="KFC Store"
          dishesh={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bu9j8dukm6a5gte1cyqs"
          title="NIC Ice Cream"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Market Yard, Nishant Colony"
          dishesh={[]}
          lang={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow2;
