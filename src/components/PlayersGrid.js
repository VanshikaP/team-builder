import React from 'react'
import PlayerCard from './PlayerCard'

const PlayersGrid = (props) => {
    return (
        <div className = 'card-container'>
            {props.players.map(player => {
                return <PlayerCard player={player}/>
            })}
        </div>
    )
}

export default PlayersGrid
