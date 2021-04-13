import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import merge from 'lodash.merge';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
};

const baseStyles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
    borderColor: '#ff0000',
    borderWidth: 1,
    paddingHorizontal: padding.sm,
    paddingVertical: padding.sm,
  },
  tabItem: {
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  tabItemActive: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: '#efefef',
  },
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create(merge(baseStyles, overrides));
}
