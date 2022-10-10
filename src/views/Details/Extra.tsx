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
      {breed.altNames === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`Nombres alternativos: ${breed.altNames}`}
        </Text>
      )}
      {breed.bidability === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`Obediencia: ${scaleMap(breed.bidability)}`}
        </Text>
      )}
      {breed.cfaUrl === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`Url del CFA: ${breed.cfaUrl}`}
        </Text>
      )}
      {breed.lap === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`Ama los regazos: ${boolMap(breed.lap)}`}
        </Text>
      )}
      {breed.referenceImageId === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`ID de imagen de referencia: ${breed.referenceImageId}`}
        </Text>
      )}
      {breed.vcaHospitalsUrl === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`URL de hospitales VCA: ${breed.vcaHospitalsUrl}`}
        </Text>
      )}
      {breed.vetStreetUrl === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`URL de VetStreet: ${breed.vetStreetUrl}`}
        </Text>
      )}
      {breed.wikipediaUrl === undefined ? undefined : (
        <Text style={[appStyles.p, styles.text]}>
          {`URL de Wikipedia: ${breed.wikipediaUrl}`}
        </Text>
      )}
    </View>
  );
};

export { ExtraDetails };
