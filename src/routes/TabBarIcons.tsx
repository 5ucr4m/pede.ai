import { AntDesign, Ionicons } from "@expo/vector-icons";

type TabBarIconProps = {
  color: string;
  size: number;
};

export const HomeIcon = ({ color, size }: TabBarIconProps) => (
  <AntDesign name="isv" size={size} color={color} />
);

export const ProfileIcon = ({ color, size }: TabBarIconProps) => (
  <Ionicons name="person-outline" size={size} color={color} />
);
