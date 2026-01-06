
import {  ViewStyle } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { OrderPlacedScreen } from '../Screen/OrderPlacedScreen';


export default function HomeScreen() {
  
  return (
   <SafeAreaView style={$root}>
    <OrderPlacedScreen/>
   </SafeAreaView>
  );
}

const $root: ViewStyle = {
  flex: 1,

};