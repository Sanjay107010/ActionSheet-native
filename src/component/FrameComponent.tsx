import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const FrameComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>FrameComponent</Text>
    </View>
  );
};

export default FrameComponent;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '30%',
    backgroundColor: 'red',
  },
});
