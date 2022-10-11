import React, { useCallback, useState } from "react";
import type { ViewProps } from "react-native";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { magnifyingGlass } from "assets/imgs";
import { colors } from "styles";

import { styles } from "./styles";

interface ISearchBarProps extends Pick<ViewProps, "style"> {
  onSearch: (val: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Buscar",
  style,
}: ISearchBarProps): JSX.Element => {
  const [text, setText] = useState("");

  const handlePress = useCallback((): void => {
    onSearch(text);
  }, [onSearch, text]);

  return (
    <View style={[styles.box, style]}>
      <TextInput
        onChangeText={setText}
        placeholder={placeholder}
        placeholderTextColor={colors.GRAY}
        style={styles.input}
        value={text}
      />
      <TouchableOpacity onPress={handlePress}>
        <Image source={magnifyingGlass} style={styles.button} />
      </TouchableOpacity>
    </View>
  );
};

export { SearchBar };
