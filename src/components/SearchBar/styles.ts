import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    backgroundColor: colors.LIGHT,
    borderColor: colors.GRAY,
    borderRadius: 8,
    borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  button: {
    height: 24,
    width: 24,
  },
  input: {
    color: colors.GRAY_DARK,
    flexGrow: 1,
    fontSize: 18,
  },
});

export { styles };
