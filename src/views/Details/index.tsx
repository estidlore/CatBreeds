import React from "react";
import { Image, ScrollView, Text } from "react-native";

import { logo } from "assets/imgs";
import { Header, Screen } from "components";
import type { TAppScreenProps } from "navigation/types";
import { styles as appStyles } from "styles";

import { boolMap, scaleMap } from "./helpers";
import { styles } from "./styles";

type TDetailsScreenProps = TAppScreenProps<"Details">;

const DetailsScreen = ({
  navigation,
  route,
}: TDetailsScreenProps): JSX.Element | null => {
  const { breed } = route.params;

  return (
    <Screen>
      <Header navigation={navigation} title={breed.name} />
      <Image
        source={breed.image === undefined ? logo : ({
          height: breed.image.height,
          uri: breed.image.url,
          width: breed.image.width,
        })}
        style={styles.image}
      />
      <ScrollView>
        <Text style={[appStyles.p, styles.text]}>
          {`ID: ${breed.id}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {breed.description}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Adaptabilidad: ${scaleMap(breed.adaptability)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Nivel de afección: ${scaleMap(breed.affectionLevel)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Amabilidad con niños: ${scaleMap(breed.childFriendly)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Código de país: ${breed.countryCode}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Códigos de país: ${breed.countryCodes}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Amabilidad con perros: ${scaleMap(breed.dogFriendly)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Nivel de energía: ${scaleMap(breed.energyLevel)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Experimental: ${boolMap(breed.experimental)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Aseo: ${scaleMap(breed.grooming)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Pelo: ${boolMap(!breed.hairless)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Problemas de salud: ${scaleMap(breed.healthIssues)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Hipoaliergénico: ${boolMap(breed.hypoallergenic)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`De interiores: ${boolMap(breed.indoor)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Inteligencia: ${scaleMap(breed.intelligence)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Esperanza de vida: ${breed.lifeSpan}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Natural: ${boolMap(breed.natural)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Origen: ${breed.origin}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Raro: ${boolMap(breed.rare)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Rex: ${boolMap(breed.rex)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Pérdida de pelo: ${scaleMap(breed.sheddingLevel)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Piernas cortas: ${boolMap(breed.shortLegs)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Necesidad social: ${scaleMap(breed.socialNeeds)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Amabilidad con extraños: ${scaleMap(breed.strangerFriendly)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Cola corta: ${boolMap(breed.suppressedTail)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Temperamento: ${breed.temperament}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Vocalización: ${scaleMap(breed.vocalisation)}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Peso - imperial: ${breed.weight.imperial}`}
        </Text>
        <Text style={[appStyles.p, styles.text]}>
          {`Peso - métrica: ${breed.weight.metric}`}
        </Text>
      </ScrollView>
    </Screen>
  );
};

export { DetailsScreen };
