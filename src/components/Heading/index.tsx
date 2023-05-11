import React from "react";
import { useTheme, Heading as NBHeading, IHeadingProps } from "native-base";

const Heading: React.FC<IHeadingProps> = ({ children }) => {
  const { fonts, fontSizes } = useTheme();
  return (
    <NBHeading fontFamily={fonts.heading} fontSize={fontSizes.md}>
      {children}
    </NBHeading>
  );
};

export default Heading;
