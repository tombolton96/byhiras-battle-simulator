import { ROLL_DICE, CALC_DAMAGE, TAKE_DAMAGE, RESET_GAME, AttackReducer, CHAR_ANIMATION } from './types'
import initialState from './initialState'

export const attackReducer: AttackReducer = (state = initialState, action) => {
    switch(action.type) {
        case ROLL_DICE:
          const roll = () => Math.round(Math.random() * 5) + 1

          return state.game.ended ? state : {
            ...state,
            player: {
              ...state.player,
              die1: roll(),
              die2: roll()
            },
            opponent: {
              ...state.opponent,
              die1: roll(),
              die2: roll()
            }
          }
        case CALC_DAMAGE:
          const playerTotal = state.player.die1 + state.player.die2
          const opponentTotal = state.opponent.die1 + state.opponent.die2
          const damage = Math.abs(playerTotal - opponentTotal)
          const target = playerTotal > opponentTotal ? 'opponent' : 'player'

          return state.game.ended ? state : {
            ...state,
            attack: {
              damage,
              target
            }
          }
        case TAKE_DAMAGE:
          const { payload } = action

          if (payload.target) {
            const hp = state[payload.target].hp - payload.damage
            if (hp < 1) {
              return {
                ...state,
                [payload.target]: {
                  ...state[payload.target],
                  hp: 0
                },
                game: {
                  ended: true,
                  loser: payload.target
                }
              }
            }

            return state.game.ended ? state : {
              ...state,
              [payload.target]: {
                ...state[payload.target],
                hp,
              }
            }
          }
        // case CHAR_ANIMATION:
        //   return state.game.ended ? state : {
        //     ...state,
        //     [action.payload.character]: {
        //       ...state[action.payload.characer],
        //       animation: action.payload.animation
        //     }
        //   }
        // eslint-disable-next-line
        case RESET_GAME:
          return initialState
        // eslint-disable-next-line
        default:
            return state
    }
}