import { ROLL_DICE, CALC_DAMAGE, TAKE_DAMAGE, RESET_GAME, BattleSimThunkAction } from './types'

export const attack = (): BattleSimThunkAction => (dispatch, getState) => {
    dispatch({ type: ROLL_DICE })
    dispatch({ type: CALC_DAMAGE })
    const { attack } = getState()
    dispatch({ type: TAKE_DAMAGE, payload: attack })
}

export const resetGame = (): BattleSimThunkAction => dispatch => {
    dispatch({ type: RESET_GAME })
}
