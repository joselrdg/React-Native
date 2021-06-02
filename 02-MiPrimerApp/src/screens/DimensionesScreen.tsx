import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const DimensionesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DimensionesScreen</Text>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f49a25',
  },
});
