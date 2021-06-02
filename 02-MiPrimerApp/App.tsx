import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import {ContadorScreen} from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      <FlexScreen/>
    </SafeAreaView>
  );
};

export default App;
