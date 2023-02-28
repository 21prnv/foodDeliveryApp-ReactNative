import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrorentCards from "./RestrorentCards";

const FeaturedRow1 = ({ title, description }) => {
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
          imgUrl="https://www.brit.co/media-library/veggie-loaded-butter-chicken-curry-in-a-top-indian-food-recipe.jpg?id=22867005&width=820&height=1093&coordinates=0%2C23%2C0%2C0&quality=80"
          title="Veggie-Loaded Butter Chicken Curry"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="This lightened up butter chicken curry relies on yogurt instead of coconut cream to make a luscious sauce, and it’s loaded with extra veggies for added nutrients and fiber."
          dishesh={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://www.brit.co/media-library/indian-spiced-veggie-burgers-indian-food.jpg?id=28774712&width=820&quality=80"
          title="Indian Spiced Veggie Burgers"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Spice up dinner tonight with a twist on the classic veggie burger in this delicious Indian food recipe."
          dishesh={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://i.ndtvimg.com/i/2015-03/mutton-korma_625x350_51426244304.jpg"
          title="Butter Chicken"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="From The Essential Indian Instant Pot Cookbook by Archana Mundhe, this 30-minute butter chicken recipe is ideal when you want a low-effort, high-reward meal"
          dishesh={[]}
          lang={20}
          lat={0}
        />
        <RestrorentCards
          id={123}
          imgUrl="https://c.ndtvimg.com/2022-07/g1sfm4pg_biryani_625x300_07_July_22.png"
          title="Hyderabadi Biryani"
          rating={4.5}
          genre="india"
          adress="123 Street"
          short_description="Hyderabadi biryani is a style of biryani originating from Hyderabad, India made with basmati rice and meat."
          dishesh={[]}
          lang={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow1;
