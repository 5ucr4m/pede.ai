// components/FoodItem.tsx

import React, { memo } from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

import Text from "@components/Text";
import Heading from "@components/Heading";
import Tag from "@components/Tag";

export type FoodItemProps = {
  id: string;
  title: string;
  description: string;
  tag_new: boolean;
  img: string;
  size: string;
  price: number;
  discount_price: number;
  tag_discount: boolean;
};

const FoodListItem: React.FC<FoodItemProps> = ({
  title,
  tag_new,
  tag_discount,
  discount_price,
  description,
  size,
  price,
  img,
}) => {
  const discount = `${(((discount_price - price) * 100) / price).toFixed(0)}%`;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Heading>{title}</Heading>
        <View style={styles.tags}>
          <Tag text={"Novo"} type={"newProduct"} isVisible={!!tag_new} />
          <Tag text={discount} type={"discount"} isVisible={!!tag_discount} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          {size ? (
            <Heading variant="md" style={styles.size}>
              {size} -
            </Heading>
          ) : null}
          <Heading variant="md" style={styles.size}>
            R$ {discount_price.toFixed(2)}
          </Heading>
          {!!tag_discount && (
            <Text variant="sm" style={styles.priceWithDiscount}>
              R$ {price.toFixed(2)}
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 8,
        }}
      >
        {!!img ? <Image source={{ uri: img }} style={styles.image} /> : null}
      </View>
    </View>
  );
};

export default memo(FoodListItem);
