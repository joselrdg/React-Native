import React from 'react';
import {View, Text} from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>
      <View style={styles.fila}>
        <BotonCalc texto='C' color='#9D9D9D'/>
        <BotonCalc texto='+/-' color='#9D9D9D'/>
        <BotonCalc texto='del' color='#9D9D9D'/>
        <BotonCalc texto='/' color='#FF9427'/>

      </View>
    </View>
  );
};
