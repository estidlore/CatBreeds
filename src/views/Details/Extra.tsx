import React from "react";
import { Text, View } from "react-native";

import { styles as appStyles } from "styles";

import { boolMap, scaleMap } from "./helpers";
import { styles } from "./styles";
import type { IExtraDetailsProps } from "./types";

const ExtraDetails = ({
  breed,
}: IExtraDetailsProps): JSX.Element => {
  return (
    <View>
      {breed.altNames ? (
        <Text style={[appStyles.p, styles.text]}>
          {`Nombres alternativos: ${breed.altNames}`}
        </Text>
      ) : undefined}
      {breed.bidability === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`Obediencia: ${scaleMap(breed.bidability)}`}
        </Text>
      )}
      {breed.catFriendly === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`Amigabilidad: ${scaleMap(breed.catFriendly)}`}
        </Text>
      )}
      {breed.cfaUrl ? (
        <Text style={[appStyles.p, styles.text]}>
          {`Url del CFA: ${breed.cfaUrl}`}
        </Text>
      ) : undefined}
      {breed.lap === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`Ama los regazos: ${boolMap(breed.lap)}`}
        </Text>
      )}
      {breed.referenceImageId ? (
        <Text style={[appStyles.p, styles.text]}>
          {`ID de imagen de referencia: ${breed.referenceImageId}`}
        </Text>
      ) : undefined}
      {breed.vcaHospitalsUrl ? (
        <Text style={[appStyles.p, styles.text]}>
          {`URL de hospitales VCA: ${breed.vcaHospitalsUrl}`}
        </Text>
      ) : undefined}
      {breed.vetStreetUrl ? (
        <Text style={[appStyles.p, styles.text]}>
          {`URL de VetStreet: ${breed.vetStreetUrl}`}
        </Text>
      ) : undefined}
      {breed.wikipediaUrl ? (
        <Text style={[appStyles.p, styles.text]}>
          {`URL de Wikipedia: ${breed.wikipediaUrl}`}
        </Text>
      ) : undefined}
    </View>
  );
};

export { ExtraDetails };
