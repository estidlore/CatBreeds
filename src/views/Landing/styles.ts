import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  cardImage: {
    aspectRatio: 1,
    marginVertical: 8,
    width: "100%",
  },
  resultsCount: {
    color: colors.GRAY,
    marginBottom: 12,
  },
  searchBar: {
    marginBottom: 8,
  },
});

export { styles };
