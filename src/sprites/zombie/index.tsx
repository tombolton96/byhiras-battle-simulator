import React, { useState, useEffect } from 'react'
import Sprite from '../Sprite'
import idle_spritesheet from './idle_spritesheet.png'
import attack_spritesheet from './attack_spritesheet.png'
import dead_spritesheet from './dead_spritesheet.png'
import { SpriteState, SpriteProps } from '../types'

const ZombieSprite: React.FC<SpriteProps> = ({ animation }) => {
    const idleSprite = {
        image: idle_spritesheet,
        widthFrame: 430,
        heightFrame: 519,
        steps: 12,
        fps: 12,
        loop: true
    }

    const [zombieState, setZombieState] = useState<SpriteState>(idleSprite)

    const attackingSprite = {
        image: attack_spritesheet,
        widthFrame: 430,
        heightFrame: 519,
        steps: 8,
        fps: 8,
        loop: true,
        onLoopComplete: () => setZombieState(idleSprite)
    }

    const deadSprite = {
        image: dead_spritesheet,
        widthFrame: 629,
        heightFrame: 526,
        steps: 8,
        fps: 8
    }

    useEffect(() => {
        switch(animation) {
            case 'attacking':
                setZombieState(attackingSprite)
                break
            case 'dead':
                setZombieState(deadSprite)
                break
            default:
                setZombieState(idleSprite)
        }
    // eslint-disable-next-line
    }, [animation])

    return (
        <Sprite width='320px' {...zombieState} />
    )
}

export default ZombieSprite