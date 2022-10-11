import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";

import { Header, Screen, SearchBar } from "components";
import type { TAppScreenProps } from "navigation/types";
import { styles as appStyles } from "styles";
import type { IBreed } from "types/breed";
import { format } from "utils/breed";

import { BreedCard } from "./BreedCard";
import { getBreeds } from "./queries";
import { styles } from "./styles";

type TLandingScreenProps = TAppScreenProps<"Landing">;

const LandingScreen = ({
  navigation,
}: TLandingScreenProps): JSX.Element => {
  const [breeds, setBreeds] = useState<IBreed[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<IBreed[]>([]);

  const handleSearch = useCallback((val: string): void => {
    setFilteredBreeds(breeds.filter((breed) => {
      return breed.name.toLowerCase().includes(val.toLowerCase());
    }));
  }, [breeds, setFilteredBreeds]);

  useEffect((): void => {
    void getBreeds().then((data) => {
      setBreeds(data.map((breed) => format(breed)));
    });
  }, []);

  useEffect((): void => {
    handleSearch("");
  }, [breeds]);

  return (
    <Screen>
      <Header navigation={navigation} title={"Cat Breeds"} />
      <SearchBar
        onSearch={handleSearch}
        placeholder={"Buscar raza"}
        style={styles.searchBar}
      />
      <Text style={[appStyles.p, styles.resultsCount]}>
        {`${filteredBreeds.length} resultados`}
      </Text>
      <ScrollView>
        {filteredBreeds.map((breed): JSX.Element => (
          <BreedCard
            image={breed.image}
            intelligence={breed.intelligence}
            key={breed.name}
            name={breed.name}
            onPress={function fn(): void {
              navigation.navigate("Details", { breed });
            }}
            origin={breed.origin}
          />
        ))}
      </ScrollView>
    </Screen>
  );
};

export { LandingScreen };
