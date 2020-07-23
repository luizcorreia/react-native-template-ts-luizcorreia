import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="white" />
    <View style={{ flex: 1, backgroundColor: 'white' }} />
  </>
);

export default App;
