import React, { useCallback, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { magnifyingGlass } from "assets/imgs";

import { styles } from "./styles";

interface ISearchBarProps {
  onSearch: (val: string) => void;
}

const SearchBar = ({
  onSearch,
}: ISearchBarProps): JSX.Element => {
  const [text, setText] = useState("");

  const handlePress = useCallback((): void => {
    onSearch(text);
  }, [onSearch, text]);

  return (
    <View style={styles.box}>
      <TextInput onChangeText={setText} style={styles.input} value={text} />
      <TouchableOpacity onPress={handlePress}>
        <Image source={magnifyingGlass} style={styles.button} />
      </TouchableOpacity>
    </View>
  );
};

export { SearchBar };
