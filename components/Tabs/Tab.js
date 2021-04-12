import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './tab.styles';

function Tab({
  children
}) {
  return (
    <View styles={styles.tab}>
      <Text>{children}</Text>
    </View>
  )
}

export default Tab;
