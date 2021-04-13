# Tabs for React Native.

Flexible and faster Tabs component.

```bash
$ npm install
```
# use
```javascript
import {
  Tabs,
  Tab,
  TabContent,
} from './components/Tabs';

export default function App() {
  return (
    <View style={styles.container}>
      <Tabs>
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
      </Tabs>
    </View>
  );
}
```

# Styles
```javascript
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
```
