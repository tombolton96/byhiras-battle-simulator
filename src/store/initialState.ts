import { BattleSimState } from './types'

const initialState: BattleSimState = {
    player: {
        hp: 100,
        die1: 1,
        die2: 1
    },
    opponent: {
        hp: 100,
        die1: 1,
        die2: 1
    },
    attack: {
        damage: 0,
        target: undefined
    },
    game: {
        ended: false,
        loser: undefined
    }
}

export default initialState