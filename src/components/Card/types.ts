import { StyleProp, ViewStyle } from 'react-native';

import { Cat } from 'models/Cat';

interface CardProps {
  cat: Cat;
  style?: StyleProp<ViewStyle>;
}

export type { CardProps };
