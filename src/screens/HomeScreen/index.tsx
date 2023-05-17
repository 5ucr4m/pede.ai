import React, { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaView, SectionList } from "react-native";

import { foodData } from "./data";

import CategoryScroll from "@screens/HomeScreen/components/CategoryScroll";

import ListItemsWithCategory from "./components/ListItemsWithCategory";
import Banner from "@components/Banner";

const FoodScreen: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionListRef = useRef<SectionList>(null);

  const handleCategoryPress = useCallback(
    (category: string) => {
      const index = foodData.findIndex(
        (item) => item.name_category === category
      );

      sectionListRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 1,
        animated: true,
      });
    },
    [sectionListRef.current]
  );

  const sectionList = useMemo(
    () =>
      foodData.map((item) => {
        return item.name_category;
      }),
    []
  );

  return (
    <SafeAreaView>
      <Banner />
      <CategoryScroll
        selectedIndex={currentSection}
        categories={sectionList}
        onCategoryPress={handleCategoryPress}
      />
      <ListItemsWithCategory
        setCurrentSection={setCurrentSection}
        ref={sectionListRef}
      />
    </SafeAreaView>
  );
};

export default FoodScreen;
