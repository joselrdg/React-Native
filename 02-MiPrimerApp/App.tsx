import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import {ContadorScreen} from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen/>
    </SafeAreaView>
  );
};

export default App;
