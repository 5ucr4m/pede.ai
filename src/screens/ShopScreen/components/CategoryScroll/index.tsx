import React, { memo, useState, useRef, useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import Text from "@components/Text";

import { styles } from "./styles";

type CategoryProps = {
  selectedIndex: number;
  categories: string[];
  onCategoryPress: (category: string) => void;
};

const CategoryScroll: React.FC<CategoryProps> = ({
  selectedIndex,
  categories,
  onCategoryPress,
}) => {
  const [_, setSelectedIndex] = useState(0);
  const [widths, setWidths] = useState<number[]>([]);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (widths.length === 0 || widths[selectedIndex] === undefined) return;
    let x = 0;
    for (let i = 0; i < selectedIndex; i++) {
      x += widths[i];
    }
    scrollRef.current?.scrollTo({ x, animated: true });
  }, [selectedIndex, widths]);

  const handleCategoryPress = (index: number) => {
    setSelectedIndex(index);
    onCategoryPress(categories[index]);
  };

  const handleLayout = (
    event: { nativeEvent: { layout: { width: number } } },
    index: number
  ) => {
    const { width } = event.nativeEvent.layout;
    setWidths((oldWidths) => {
      const newWidths = [...oldWidths];
      newWidths[index] = width;
      return newWidths;
    });
  };

  return (
    <View style={{ height: 80 }}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategoryPress(index)}
            onLayout={(event) => handleLayout(event, index)}
            style={
              selectedIndex === index ? styles.categoryActive : styles.category
            }
          >
            <Text
              style={
                selectedIndex === index
                  ? styles.categoryTextActive
                  : styles.categoryText
              }
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(CategoryScroll);
