import React from 'react'
import { useDispatch } from 'react-redux'
import { attack } from '../../store/actions'

const AttackButton: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(attack())}>ATTACK!</button>
    )
}

export default AttackButton