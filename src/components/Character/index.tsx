import React, { ReactNode } from 'react'
import styled from 'styled-components'
import HealthBar from '../HealthBar'

const CharacterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

interface CharacterProps {
    name: string,
    hp?: number,
    sprite: ReactNode,
    die1: number,
    die2: number
}

const Character: React.FC<CharacterProps> = ({ name, hp = 100, sprite, die1 = 1, die2 = 1 }) => {
    return (
        <CharacterContainer>
            {sprite}
            <HealthBar hp={hp}/>
            <span>{name} ({hp} hp)</span>
            {name === 'Player' ? 'You' : name} rolled: {die1}, {die2}
        </CharacterContainer>
    )
}

export default Character