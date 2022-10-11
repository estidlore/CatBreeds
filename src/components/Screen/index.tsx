import type { ReactNode } from "react";
import React from "react";
import type { ViewProps } from "react-native";
import { SafeAreaView, StatusBar, } from "react-native";

import { styles } from "./styles";

interface IScreenProps extends Pick<ViewProps, "style"> {
  children: ReactNode;
}

const Screen = ({
  children,
  style,
}: IScreenProps): JSX.Element => {
  return (
    <SafeAreaView style={[styles.box, style]}>
      <StatusBar hidden={true} />
      {children}
    </SafeAreaView>
  );
};

export { Screen };
