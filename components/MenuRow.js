import { View, Text } from "react-native";
import React from "react";
import DishRow from "./DishRow";

const MenuRow = () => {
  return (
    <View>
      <DishRow
        id={12}
        name="Idli"
        imagelink="https://www.jacadatravel.com/wp-content/uploads/fly-images/316526/iStock-1024549286-552x310-cc.jpg"
        discription="Popular across South India, idli are often thought of as the breakfast versions of dosa. "
        price={50}
      />
      <DishRow
        id={123}
        name="KFC"
        imagelink="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb"
        discription="KFC Is Also Known For Best Chicken Seller"
        price={100}
      />
      <DishRow
        id={1234}
        name="Ice-Cream"
        imagelink="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bu9j8dukm6a5gte1cyqs"
        discription="Have A Good Ice-Cream In This Summer"
        price={70}
      />
      <DishRow
        id={12345}
        name="Royal Biryani"
        imagelink="https://c.ndtvimg.com/2022-07/g1sfm4pg_biryani_625x300_07_July_22.png"
        discription="Hyderabadi biryani is a style of biryani originating from Hyderabad, India made with basmati rice and meat."
        price={150}
      />
      <DishRow
        id={123456}
        name="VadaPav"
        imagelink="https://www.jacadatravel.com/wp-content/uploads/fly-images/316521/iStock-1157170530-552x310-cc.jpg"
        discription="Originating in the traditionally vegetarian state of Maharashtra, vada pav is as close as Indian cuisine gets to veggie burgers."
        price={100}
      />
    </View>
  );
};

export default MenuRow;
