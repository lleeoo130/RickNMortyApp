import './App.css';
import EpisodeList from './EpisodeList/EpisodeList.js';
import rick from './assets/rick.svg';
import morty from './assets/morty-logo.svg';


function App() {
  return (

      <div className="App">
        <header className="App-header">
          <div>
            <img src={rick} className="App-logo rick" alt="rick"/>
            <img src={morty} className="App-logo morty" alt="morty"/>
            <EpisodeList/>
          </div>
        </header>
      </div>

  );
}

export default App;
