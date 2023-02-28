import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategariesCard from "./CategariesCard";

const Categaries = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategariesCard
        imgUrl="https://images.cdn4.stockunlimited.net/preview1300/hot-offer-label_1495146.jpg"
        title="Offers"
      />
      <CategariesCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg"
        title="Indian"
      />
      <CategariesCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
        title="Desert"
      />
      <CategariesCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/dd8a3a1d71/chicken-wide.jpg"
        title="Chicken"
      />
      <CategariesCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/47c289a9f4/pizza-wide.jpg"
        title="Pizza"
      />
      <CategariesCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg"
        title="Curry"
      />
    </ScrollView>
  );
};

export default Categaries;
