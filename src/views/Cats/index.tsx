import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Card } from 'components/Card';
import { Cat } from 'models/Cat';
import { getCats } from 'utils/api';

import { styles } from './styles';

const Cats = (): JSX.Element => {
  const [cats, setCats] = useState<Cat[]>();

  useEffect(() => {
    getCats().then(setCats).catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Cat Breeds'}</Text>
      <ScrollView>
        {cats === undefined ? (
          <Text style={styles.loading}>{'Loading cats...'}</Text>
        ) : (
          cats.map((cat) => <Card cat={cat} key={cat.id} style={styles.card} />)
        )}
      </ScrollView>
    </View>
  );
};

export { Cats };
