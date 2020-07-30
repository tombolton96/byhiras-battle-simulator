import { Reducer, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const ROLL_DICE = 'ROLL_DICE'
export const CALC_DAMAGE = 'CALC_DAMAGE'
export const TAKE_DAMAGE = 'TAKE_DAMAGE'
export const RESET_GAME = 'RESET_GAME'
export const CHAR_ANIMATION  = 'CHAR_ANIMATION'

export type Character = 'player' | 'opponent' | undefined
type Animation = 'idle' | 'attacking' | 'dead'

interface CharAnimation {
    animation: Animation,
    character: Character
}
 
export interface CharacterState {
    hp: number,
    die1: number,
    die2: number,
    animation: Animation
}

export interface Attack { target: Character, damage: number }

export interface GameState { ended: boolean, loser: Character }

export interface BattleSimState {
    player: CharacterState,
    opponent: CharacterState,
    attack: Attack,
    game: GameState
}

interface RollDiceAction { type: typeof ROLL_DICE }
interface CalculateDamageAction { type: typeof CALC_DAMAGE }
interface ResetGameAction { type: typeof RESET_GAME }
interface TakeDamageAction { type: typeof TAKE_DAMAGE, payload: Attack }
interface CharAnimationAction { type: typeof CHAR_ANIMATION, payload: CharAnimation }

export type BattleSimThunkAction = ThunkAction<void, BattleSimState, unknown, Action<string>>
export type AttackActionTypes = RollDiceAction
    | CalculateDamageAction
    | TakeDamageAction
    | ResetGameAction
    | CharAnimationAction
export type AttackReducer = Reducer<BattleSimState, AttackActionTypes>