import React, {
  useEffect,
  useState,
} from 'react';

import {
  Animated,
} from 'react-native';

function TabContentItem({
  children,
  visible,
  style,
}) {
  if (!visible) return null;
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      },
    ).start();
  });

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
}

export default TabContentItem;
