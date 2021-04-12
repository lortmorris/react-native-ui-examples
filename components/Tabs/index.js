import React from 'react';

export Tab from './Tab';

import styles from './tabs.styles';

import {
  View,
} from 'react-native';

function Tabs({
  children,
}) {
  console.info('chiildren: ', children);

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default Tabs;
