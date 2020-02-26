import React, {useState} from 'react';
import {Button} from 'reactstrap';

const PlayerCard = (props) => {
    const [player, setPlayer] = useState({
        name: props.player.name,
        number: props.player.number,
        position: props.player.position,
        isInEditMode: false
    });

    const handleChange = (e) => {
        setPlayer({...player, [e.target.name]: e.target.value})
    }
    const editPlayer = (e) => {
        e.preventDefault();
        setPlayer({...player, isInEditMode: !player.isInEditMode})
    }

    // return (
    //     <div>
    //         {if(player.isInEditMode){
    //             <div className = 'card'>
                    
    //             </div>
    //         } else {
    //             <div className = 'card'>
                    
    //             </div>
    //         }}
            
    //     </div>
    // )
    if(player.isInEditMode){
        return (
            <div className = 'card'>
                <input type='text' name='name' defaultValue={player.name} onChange={handleChange} />
                <input type='text' name='number' defaultValue={player.number} onChange={handleChange} />
                <input type='text' name='position' defaultValue={player.position} onChange={handleChange} />
                <Button color='secondary' onClick={editPlayer}>Save Changes</Button> 
            </div>
        )
    } else {
        return (
            <div className = 'card'>
                <h3>{player.name}</h3>
                <p>{player.position} </p>
                <h1>{player.number} </h1>
                <Button color='primary' onClick={editPlayer}>Edit</Button> 
            </div>
        )
    }

}

export default PlayerCard