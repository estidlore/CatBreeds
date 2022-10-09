import type {
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { SplashScreen } from "views/Splash";

import type { IAppParamList } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<IAppParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AppNavigation = (): JSX.Element => {
  return (
    <Navigator initialRouteName={"Splash"}>
      <Screen
        component={SplashScreen}
        name={"Splash"}
        options={screenOptions}
      />
    </Navigator>
  );
};

export { AppNavigation };
