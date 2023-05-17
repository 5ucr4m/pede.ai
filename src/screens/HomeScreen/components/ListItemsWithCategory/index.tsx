import React, { forwardRef, memo } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
  View,
} from "react-native";

import FoodItem, {
  FoodItemProps,
} from "@screens/HomeScreen/components/FoodListItem";

import { foodData } from "../../data";
import ListSectionHeader from "../ListSectionHeader";

type SectionListType = {
  item: FoodItemProps;
};

type IProps = {
  // currentSection: number;
  setCurrentSection: (currentSection: number) => void;
  Header?: JSX.Element;
};

const itemHeight = 180; // Altura do item
const headerHeight = 40; // Altura do cabeçalho da seção

const ListItemsWithCategory = forwardRef<SectionList, IProps>(
  ({ setCurrentSection, Header }, ref) => {
    const sections = foodData.map((item) => {
      return {
        data: item.itens as unknown as FoodItemProps[],
        title: item.name_category,
      };
    });

    const handleScroll = ({
      nativeEvent,
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollOffset = nativeEvent.contentOffset.y;

      let totalHeight = 0;
      let currentSectionIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        totalHeight += headerHeight;
        if (scrollOffset < totalHeight) {
          break;
        }

        totalHeight += sections[i].data.length * itemHeight;
        if (scrollOffset < totalHeight) {
          break;
        }

        currentSectionIndex++;
      }

      setCurrentSection(currentSectionIndex);
    };

    return (
      <SectionList
        ref={ref}
        sections={sections}
        onScroll={handleScroll}
        contentContainerStyle={{ paddingBottom: 300 }}
        ListHeaderComponent={Header}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <ListSectionHeader title={title} />
        )}
        renderItem={({ item }: SectionListType) => <FoodItem {...item} />}
        onScrollToIndexFailed={() => {}}
        windowSize={5}
      />
    );
  }
);

export default memo(ListItemsWithCategory);
