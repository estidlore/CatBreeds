import type { ReactNode } from "react";
import React from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native";

import { styles } from "./styles";

interface ICardProps extends Pick<ViewProps, "style"> {
  children: ReactNode;
}

const Card = ({
  children,
  style,
}: ICardProps): JSX.Element => {
  return (
    <View style={[styles.box, style]}>
      {children}
    </View>
  );
};

export { Card };
