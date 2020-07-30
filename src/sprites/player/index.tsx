import React, { useState, useEffect } from 'react'
import Sprite from '../Sprite'
import idle_spritesheet from './idle_spritesheet.png'
import attack_spritesheet from './attack_spritesheet.png'
import dead_spritesheet from './dead_spritesheet.png'
import { SpriteProps, SpriteState } from '../types'

const PlayerSprite: React.FC<SpriteProps> = ({ animation }) => {
    const idleSprite = {
        image: idle_spritesheet,
        widthFrame: 232,
        heightFrame: 439,
        steps: 10,
        fps: 10,
        loop: true
    }

    const [playerState, setPlayerState] = useState<SpriteState>(idleSprite)

    const attackingSprite = {
        image: attack_spritesheet,
        widthFrame: 536,
        heightFrame: 495,
        steps: 10,
        fps: 10,
        loop: true,
        onLoopComplete: () => setPlayerState(idleSprite)
    }

    const deadSprite = {
        image: dead_spritesheet,
        widthFrame: 482,
        heightFrame:  498,
        steps: 10,
        fps: 10
    }

    useEffect(() => {
        switch(animation) {
            case 'attacking':
                setPlayerState(attackingSprite)
                break
            case 'dead':
                setPlayerState(deadSprite)
                break
            default:
                setPlayerState(idleSprite)
        }
    // eslint-disable-next-line
    }, [animation])

    return (
        <Sprite {...playerState} />
    )
}

export default PlayerSprite
