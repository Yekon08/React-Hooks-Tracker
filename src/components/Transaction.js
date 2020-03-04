import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = (props) => {
    const sign = props.transaction.amount < 0 ? '-' : '+'

    const context = useContext(GlobalContext)

    return (
        <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
            {props.transaction.text} <span>{sign}{Math.abs(props.transaction.amount)}€</span><button onClick={() => context.deleteTransaction(props.transaction.id)} className="delete-btn">X</button>
        </li>
    )
}

export default Transaction
