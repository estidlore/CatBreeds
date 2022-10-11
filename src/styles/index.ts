import { StyleSheet } from "react-native";

import { colors } from "./colors";
import { fonts } from "./fonts";

const styles =  StyleSheet.create({
  p: {
    color: colors.BLACK,
    fontFamily: fonts.SOURCE_SANS_PRO,
    fontSize: 18,
  },
  h: {
    color: colors.BLACK,
    fontFamily: fonts.SOURCE_SANS_PRO,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});

export { colors, fonts, styles };
