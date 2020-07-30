import React from 'react'
import styled from 'styled-components'
import { useTypedSelector } from './store'
import Character from './components/Character'
import AttackButton from './components/AttackButton'
import GameStatus from './components/GameStatus'
import PlayerSprite from './sprites/player'
import ZombieSprite from './sprites/zombie'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Heelvetica, sans-serif;
`

const Characters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  width: 100%;
`

const BattleSimulator = () => {
  const { player, opponent, ...state } = useTypedSelector(state => state)

  const playerAnimation = player.hp < 1
    ? 'dead'
    : state.attack.target === 'opponent'
      ? 'attacking'
      : 'idle'

  const zombieAnimation = opponent.hp < 1
    ? 'dead'
    : state.attack.target === 'player'
      ? 'attacking'
      : 'idle'

  return (
    <Container>
      <Characters>
        <Character
          name='Player'
          sprite={<PlayerSprite animation={playerAnimation}/>}
          {...player}
        />
        <GameStatus {...state} />
        <Character
          name='Zombie'
          sprite={<ZombieSprite animation={zombieAnimation} />}
          {...opponent}
        />
      </Characters>
      <AttackButton/>
    </Container>
  )
}

export default BattleSimulator
