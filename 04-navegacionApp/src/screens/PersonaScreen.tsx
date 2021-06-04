import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import { RootStackParans } from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';

// interface RouteParams {
//   id: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RootStackParans, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
//   const params = route.params as RouteParams;
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
