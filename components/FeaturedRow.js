import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrorentCards from "./RestrorentCards";

const FeaturedRow = ({ title, description }) => {
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
          imgUrl="https://www.jacadatravel.com/wp-content/uploads/fly-images/316518/iStock-502019013-552x310-cc.jpg"
          title="Masala Dosa"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka"
          dishesh1={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://www.jacadatravel.com/wp-content/uploads/fly-images/316521/iStock-1157170530-552x310-cc.jpg"
          title="Vadapav"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Originating in the traditionally vegetarian state of Maharashtra, vada pav is as close as Indian cuisine gets to veggie burgers."
          dishesh1={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://www.jacadatravel.com/wp-content/uploads/fly-images/316525/iStock-1177589252-552x310-cc.jpg"
          title="Panipuri"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Pani puri, or gol guppa,  are thought to originate from the northern state of Bihar. "
          dishesh1={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://www.jacadatravel.com/wp-content/uploads/fly-images/316526/iStock-1024549286-552x310-cc.jpg"
          title="Idli"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Popular across South India, idli are often thought of as the breakfast versions of dosa. "
          dishesh1={[]}
          lang={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
