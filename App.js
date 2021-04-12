import React, {
  useState,
  useEffect,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Tabs, { Tab } from './components/Tabs';

function FadeInView ({
  style,
  children
}) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(                  // Animate over time
      fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
        useNativeDriver: true,
      }
    ).start();
  });

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
  );
}

export default function App() {
  return (
      <View style={styles.container}>
        <FadeInView>
          <Text>Open up App.js to start working on your app!</Text>
          <Tabs>
            <Tab>Restaurantes</Tab>
            <Tab>Mercados</Tab>
            <Tab>Bebidas alcólicas</Tab>
          </Tabs>
          <StatusBar style="auto" />
        </FadeInView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
