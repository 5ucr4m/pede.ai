import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SafeAreaView, SectionList } from "react-native";

import Banner from "@components/Banner";
import CategoryScroll from "@screens/ShopScreen/components/CategoryScroll";
import ListItemsWithCategory from "./components/ListItemsWithCategory";
import { useAppDispatch, useAppSelector } from "@src/hooks/hooks";
import { fetchStore, selectStoreItems } from "@store/features/Store/storeSlice";

const ShopScreen: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectStoreItems);
  const sectionListRef = useRef<SectionList>(null);

  useEffect(() => {
    dispatch(fetchStore());
  }, []);

  const handleCategoryPress = useCallback(
    (category: string) => {
      const index = categories.findIndex(
        (item) => item.name_category === category
      );

      sectionListRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 1,
      });
    },
    [sectionListRef.current]
  );

  const sectionList = useMemo(
    () =>
      categories.map((item) => {
        return item.name_category;
      }),
    [categories]
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

export default ShopScreen;
