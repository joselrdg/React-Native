import React, {useState} from 'react';
import {Button, Text, StyleSheet, TouchableOpacity, View} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setcontador] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador}</Text>
      <TouchableOpacity onPress={() => setcontador(contador + 1)}>
        <View style={style.bottonIncrementar}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  bottonIncrementar: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
});
