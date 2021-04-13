import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';

function TabItem({
  children,
  onPress,
  selected,
  styles,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabItem, selected ? styles.tabItemActive : {}]}
    >
      {children}
    </TouchableOpacity>
  );
}

export default TabItem;
