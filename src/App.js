import React, {useState, useEffect} from 'react';
import './App.css';
import PlayersData from './PlayersData';
import PlayerForm from './components/PlayerForm'
import PlayersGrid from './components/PlayersGrid'


function App() {

  const [players, setPlayers] = useState(PlayersData);


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
        <img className = 'logo' src = 'https://www8.lunapic.com/editor/p-trans.php?preview=1&fuzz=8&x=135&y=79&rand=5084&fill=' alt='navarro logo'></img>
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
