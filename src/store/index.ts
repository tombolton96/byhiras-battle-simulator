import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { attackReducer } from './attackReducer'
import { BattleSimState } from './types'

export let store = createStore(attackReducer, composeWithDevTools(applyMiddleware(thunk)))

export const useTypedSelector: TypedUseSelectorHook<BattleSimState> = useSelector 