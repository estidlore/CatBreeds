import React, { useCallback } from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import { logo } from "assets/imgs";
import { Card } from "components";
import { styles as appStyles } from "styles";

import { styles } from "./styles";
import type { IBreedCardProps } from "./types";

const BreedCard = ({
  image,
  intelligence,
  name,
  onPress,
  origin,
}: IBreedCardProps): JSX.Element => {
  const handlePress = useCallback((): void => {
    onPress();
  }, [onPress]);

  return (
    <Card style={styles.card}>
      <Text style={appStyles.p}>
        {`Raza: ${name}`}
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={appStyles.p}>
          {"Más..."}
        </Text>
      </TouchableOpacity>
      <Image
        source={image === undefined ? logo : ({
          height: image.height,
          uri: image.url,
          width: image.width,
        })}
        style={styles.cardImage}
      />
      <Text style={appStyles.p}>
        {`Origen: ${origin}`}
      </Text>
      <Text style={appStyles.p}>
        {`Inteligencia: ${intelligence}`}
      </Text>
    </Card>
  );
};

export { BreedCard };
