import React, { forwardRef, memo, useEffect, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
} from "react-native";

import FoodItem from "@screens/HomeScreen/components/FoodListItem";

import ListSectionHeader from "../ListSectionHeader";
import { useDebounce } from "@src/hooks/useDebounce";
import { useAppSelector } from "@src/hooks/hooks";
import { Items, selectStoreItems } from "@store/features/Store/storeSlice";

type SectionListType = {
  item: Items;
};

type IProps = {
  // currentSection: number;
  setCurrentSection: (currentSection: number) => void;
};

const itemHeight = 180; // Altura do item
const headerHeight = 40; // Altura do cabeçalho da seção

const ListItemsWithCategory = forwardRef<SectionList, IProps>(
  ({ setCurrentSection }, ref) => {
    const categories = useAppSelector(selectStoreItems);
    const [index, setIndex] = useState<number>(0);
    const debouncedIndex = useDebounce<number>(index, 200);

    const sections = categories.map((item) => {
      return {
        data: item.itens as unknown as Items[],
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

      setIndex(currentSectionIndex);
    };

    useEffect(() => {
      setCurrentSection(debouncedIndex);
    }, [debouncedIndex]);

    return (
      <SectionList
        ref={ref}
        sections={sections}
        onScroll={handleScroll}
        contentContainerStyle={{ paddingBottom: 300 }}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <ListSectionHeader title={title} />
        )}
        renderItem={({ item }: SectionListType) => <FoodItem {...item} />}
      />
    );
  }
);

export default memo(ListItemsWithCategory);
