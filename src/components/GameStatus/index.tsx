import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { Attack, GameState } from '../../store/types'
import { resetGame } from '../../store/actions'

const GameStatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 23rem;
    height: 10rem;
`

const centerText = css`
    text-align: center;
`

const EndText = styled.div`
    color: ${(p: { color: string }) => p.color};
    font-size: 3rem;
    ${centerText};
`

const GameText = styled.div`
    font-size: 2rem;
    ${centerText};
`

interface GameStatusProps {
    game: GameState,
    attack: Attack
}

const currentHit = ({ target, damage }: Attack) => {
    if (damage === 0 && target) {
        return 'Your attack missed!'
    }

    switch(target) {
        case 'player':
            return `You took damage of ${damage} point${damage >= 2 ? 's' : ''}!`
        case 'opponent':
            return `You hit the zombie with ${damage} point${damage >= 2 ? 's' : ''}!`
    }
}

const GameStatus: React.FC<GameStatusProps> = ({
    game: { ended: end, loser },
    attack
}) => {
    const dispatch = useDispatch()
    return (
        <GameStatusContainer>
            {!end ? (
               <GameText>{currentHit(attack)}</GameText> 
            ) : (
                <>
                    {
                        loser && {
                            'player': <EndText color='red'>Game Over</EndText>,
                            'opponent': <EndText color='limegreen'>You Win</EndText>
                        }[loser]
                    }
                    <button onClick={() => dispatch(resetGame())}>Play Again</button>
                </>
            )}
        </GameStatusContainer>
    )
}

export default GameStatus