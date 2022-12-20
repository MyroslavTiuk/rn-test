import React from 'react';
import {
  FlatList,
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const screens = [
  {name: 'Screen1', id: '1', styles: {bg: 'red'}},
  {name: 'Screen2', id: '2', styles: {bg: 'blue'}},
];

export const App = () => {
  const layout = useWindowDimensions();

  return (
    <FlatList
      data={screens}
      listKey="screens"
      snapToAlignment="start"
      keyExtractor={item => item.id}
      horizontal={true}
      snapToInterval={layout.height}
      decelerationRate={0}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View
          style={[
            {
              width: layout.width,
              height: layout.height,
              backgroundColor: item.styles.bg,
            },
            styles.container,
          ]}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
