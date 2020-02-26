import React, {useState, useEffect} from 'react';
import './App.css';
import PlayersData from './PlayersData';
import PlayerForm from './components/PlayerForm'
import PlayersGrid from './components/PlayersGrid'


function App() {

  const [players, setPlayers] = useState(PlayersData);


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);;

  useEffect(() => {
    const results = players.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResults(results);
  }, [searchTerm, players])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
  const addPlayer = (player) => {
    setPlayers([...players, player]);
  }
  
  
  return (
    <div className="App">
      <div className = 'header'>
        <img className = 'logo' src = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png' alt='Golden State Warriors logo'></img>
        <div className='search'>
          <label htmlFor='search'>Search</label>
          <input type = 'text' id='search' value={searchTerm}  onChange={handleSearch} />
        </div>
      </div>
      <div className = 'content'>
        <PlayersGrid players={searchResults} />
        <PlayerForm addPlayer={addPlayer} />
      </div>
    </div>
  );
}

export default App;
