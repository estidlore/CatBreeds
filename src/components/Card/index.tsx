import React from 'react';
import { Image, Text, View } from 'react-native';
import { CardProps } from './types';
import { styles } from './styles';

const Card = ({ cat, style }: CardProps): JSX.Element => {
  const imgAspectRatio = cat.image.width / cat.image.height;

  return (
    <View style={[style, styles.container]}>
      <Text>{`Breed: ${cat.breedName}`}</Text>
      <Image
        source={{ uri: cat.image.url }}
        style={[styles.img, { aspectRatio: imgAspectRatio }]}
        testID={`img-${cat.image.id}`}
      />
      <View style={styles.row}>
        <Text>{`Origin: ${cat.origin}`}</Text>
        <Text>{`Intelligence: ${cat.intelligence}`}</Text>
      </View>
    </View>
  );
};

export { Card };
