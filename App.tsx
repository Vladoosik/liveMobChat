import React from 'react';
import {SafeAreaView} from 'react-native';
import RootContainer from './src/screens/RootContainer';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './src/utils/theme.ts';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer theme={theme}>
        <RootContainer />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
