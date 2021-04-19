import React, {
  useState,
  useEffect,
} from 'react';

import {
  View,
  FlatList,
  ScrollView,
} from 'react-native';

import createStyles from './base.styles';

import Tab from './Tab';
import TabContent from './TabContent';
import TabItem from './TabItem';
import TabContentItem from './TabContentItem';

function Tabs({
  children,
  styles = {},
  pure,
}) {
  const [current, setCurrent] = useState(0);

  const tabs = children.filter((f) => (f.type === Tab)).map((tab) => ({ ...tab, _id: String(Math.random()) }));
  const content = children.filter((f) => (f.type === TabContent));
  const currentStyles = createStyles(styles);
  useEffect(() => {
    setCurrent(0);
  }, []);

  function renderTabsContent() {
    return (
      <View>
        {
          content.map((draw, i) => (
            <TabContentItem key={`$TABS-Index${i}`} component={draw} visible={i === current}>
              {draw}
            </TabContentItem>
          ))
        }
      </View>
    );
  }

  return (
    <View style={currentStyles.container}>
      <View style={{ height: 30 }}>
        <FlatList
          data={tabs}
          renderItem={({ item, index }) => (
            <TabItem
              onPress={() => setCurrent(index)}
              selected={current === index}
              styles={{ ...currentStyles }}
            >
              {item}
            </TabItem>
          )}
          keyExtractor={(item) => item._id}
          horizontal
        />
      </View>
      {pure ? renderTabsContent() : (
        <ScrollView>
          {renderTabsContent()}
        </ScrollView>
      )}
    </View>
  );
}

export {
  Tabs,
  Tab,
  TabContent,
};
