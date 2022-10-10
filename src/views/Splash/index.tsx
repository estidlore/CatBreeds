import React, { useEffect } from "react";
import { Image, Text } from "react-native";

import { logo } from "assets/imgs";
import { Screen } from "components";
import type { TAppScreenProps } from "navigation/types";
import { styles as appStyles } from "styles";

import { styles } from "./styles";

type TSplashScreenProps = TAppScreenProps<"Splash">;

const SplashScreen = ({
  navigation,
}: TSplashScreenProps): JSX.Element => {
  useEffect((): void => {
    setTimeout((): void => {
      navigation.replace("Landing", {});
    }, 3000);
  }, [navigation]);

  return (
    <Screen style={styles.box}>
      <Text style={appStyles.h}>{"Cat breeds"}</Text>
      <Image source={logo} style={styles.logo} />
    </Screen>
  );
};

export { SplashScreen };
