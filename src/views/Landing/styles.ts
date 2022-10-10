import { StyleSheet } from "react-native";

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
});

export { styles };
