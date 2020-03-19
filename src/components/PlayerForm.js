import React, {useState} from 'react';
import {Button} from 'reactstrap'

const PlayerForm = (props) => {
    const [player, setPlayer] = useState({
        name: '',
        number: 0,
        position:''
    })
    const handleChange = (e) => {
        setPlayer({...player, [e.target.name]:e.target.value});
    }
    const submitPlayer = (e) => {
        e.preventDefault();
        props.addPlayer(player);
        setPlayer({
            name: '',
            number: 0,
            position:''
        })
    }
    return (
        <form className='form-container'>
            <label htmlFor='name'>Player Name</label>
            <input type='text' name='name' id='name' placeholder='Enter Player Name Here' value = {player.name} onChange={handleChange} />
            <label htmlFor='number'>Number</label>
            <input type='text' name='number' id='number' placeholder='Enter Player Number Here' value = {player.number} onChange={handleChange} />
            <label htmlFor='position'>Player Position</label>
            <input list='positions' name='position' id='position' placeholder='Select Position' value = {player.position} onChange={handleChange} />
            <datalist id='positions'>
                <option value='Forward'></option>
                <option value='Guard'></option>
                <option value='Forward-Guard'></option>
            </datalist>
            <Button type='submit' color='primary' onClick={submitPlayer}>Add Player</Button>
        </form>
    )
}

export default PlayerForm;