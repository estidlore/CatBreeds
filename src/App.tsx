import React from 'react';
import { SafeAreaView } from 'react-native';

import { Cats } from 'views/Cats';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Cats />
    </SafeAreaView>
  );
};

export default App;
