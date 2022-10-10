import React, { useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { left } from "assets/imgs";
import { styles as appStyles } from "styles";

import { styles } from "./styles";
import type { IHeaderProps } from "./types";

const Header = ({
  navigation,
  title,
}: IHeaderProps): JSX.Element => {
  const handleBack = useCallback((): void => {
    navigation.pop();
  }, [navigation]);

  return (
    <View style={styles.box}>
      {title === undefined ? undefined : (
        <Text style={appStyles.h}>{title}</Text>
      )}
      {navigation.canGoBack() ? (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Image source={left} style={styles.backImage} />
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
};

export { Header };
