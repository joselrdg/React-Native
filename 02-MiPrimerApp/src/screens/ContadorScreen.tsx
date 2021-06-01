import React, {useState} from 'react';
import {Button, Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setcontador] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador}</Text>
      <Fab
      title="+1"
      onPress={() => setcontador(contador + 1)}
      />
       <Fab
      title="-1"
      onPress={() => setcontador(contador - 1)}
      position="bl"
      />
      {/* <TouchableOpacity
        style={style.fabLocationBL}
        onPress={() => setcontador(contador - 1)}>
        <View style={style.fab}>
          <Text style={style.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
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
  
});
