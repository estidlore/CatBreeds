import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface IHeaderProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  title?: string;
}

export type { IHeaderProps };
