import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import SearchBar2 from './SearchBar2';
import { useState } from 'react';

function App() {


  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <header className="App-header">       
        {/* <TextField></TextField> */}
           <SearchBar2 onSearch={setSearchQuery}></SearchBar2>
           <p>{searchQuery}</p>
      </header>
      <body>
        
      </body>
            

    </div>
  );
}

export default App;
