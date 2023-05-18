import React from "react";
import { Flex } from "native-base";

import Heading from "@components/Heading";

import { styles } from "./styles";

type IProps = {
  title: string;
};

const ListSectionHeader: React.FC<IProps> = ({ title }) => {
  return (
    <Flex style={styles.container}>
      <Heading variant="lg">{title}</Heading>
    </Flex>
  );
};

export default ListSectionHeader;
