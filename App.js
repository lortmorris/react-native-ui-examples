import React, {
  useState,
  useEffect,
} from 'react';

import {
  Text,
  View,
  Animated,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import {
  Tabs,
  Tab,
  TabContent,
} from './components/Tabs';

import RestaurantContent from './components/RestaurantContent';
import MercadosContent from './components/MercadosContent';
import DrinksContent from './components/DrinksContent';

import styles from './styles';

function FadeInView({
  style,
  children,
}) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
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

export default function App() {
  return (
    <View style={styles.container}>
      <FadeInView>
        <Text>Select the next options</Text>
        <Tabs
          styles={{
            container: {
              backgroundColor: '#efefef',
            },
          }}
        >
          <Tab>Restaurantes</Tab>
          <Tab>Mercados</Tab>
          <Tab>Bebidas alcoholicas</Tab>
          <Tab>Restaurantes</Tab>
          <Tab>Mercados</Tab>
          <Tab>Bebidas alcoholicas</Tab>
          <Tab>Restaurantes</Tab>
          <Tab>Mercados</Tab>
          <Tab>Bebidas alcoholicas</Tab>
          <TabContent>
            <RestaurantContent />
          </TabContent>
          <TabContent>
            <MercadosContent />
          </TabContent>
          <TabContent>
            <DrinksContent />
          </TabContent>
          <TabContent>
            <RestaurantContent />
          </TabContent>
          <TabContent>
            <MercadosContent />
          </TabContent>
          <TabContent>
            <DrinksContent />
          </TabContent>
          <TabContent>
            <RestaurantContent />
          </TabContent>
          <TabContent>
            <MercadosContent />
          </TabContent>
          <TabContent>
            <DrinksContent />
          </TabContent>
        </Tabs>
        <StatusBar style="dark" />
      </FadeInView>
    </View>
  );
}
