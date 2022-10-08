import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AppNavigation } from "navigation/AppNavigation";

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export { App };
