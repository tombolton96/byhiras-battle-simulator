import React from 'react'
import styled from 'styled-components'

interface HealthBarProps {
    hp: number,
    width?: number
}

const handleColorChange = ({ hp }: HealthBarProps) => {
    if (hp >= 0) {
        if (hp >= 50) {
            return 'limegreen'
        } else if (hp >= 25) {
            return 'orange'
        }
        return 'red'
    }
}

const BarContainer = styled.div`
    height: 10px;
    width: ${(p: HealthBarProps) => `${p.width}px`};
    position: relative;
    background: #555;
    border-radius: 25px;
    padding: 3px;
    margin: 20px 0;

    span {
        display: block;
        position: relative;
        overflow: hidden;
        height: 100%;
        border-radius: ${(p: HealthBarProps) => p.hp < 100 ? '20px 8px 8px 20px' : '20px'};
        background-color: ${handleColorChange};
        width: ${(p: HealthBarProps & { width: number }) => `${p.hp / 100 * p.width}px`};        
    }
`

const HealthBar: React.FC<HealthBarProps> = ({ hp, width = 300 }) => {
    const hpInRange = hp >= 100 ? 100 : (hp < 0 ? 0 : hp) 
    return (
        <BarContainer hp={hpInRange} width={width}>
            <span/>
        </BarContainer>
    )
}

export default HealthBar