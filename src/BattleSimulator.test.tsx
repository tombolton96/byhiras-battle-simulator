import React from 'react';
import ReactDOM from 'react-dom'
import BattleSimulator from './BattleSimulator'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BattleSimulator />, div)
})
