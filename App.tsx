import React from "react";
import { SafeAreaView, Text, useColorScheme } from "react-native";

import { colors } from "styles";

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";

  const bgStyle = {
    backgroundColor: isDarkMode ? colors.BLACK : colors.WHITE,
  };

  return (
    <SafeAreaView style={bgStyle}>
      <Text>{"CatBreeds"}</Text>
    </SafeAreaView>
  );
};

export { App };
