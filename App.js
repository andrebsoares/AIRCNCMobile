import React from 'react';

// ignora avisos
import { YellowBox } from 'react-native';

import Routes from './src/routes'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return <Routes />
}