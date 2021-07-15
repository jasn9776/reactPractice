import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import SearchBar3 from './SearchBar3';
import { useState } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';

function App() {
 

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
           {/* <Navbar /> */}
           <main className="container">
            {/* <Counters/> */}
           </main>
           <SearchBar3 onSearch={setSearchQuery}></SearchBar3>
           <p>{searchQuery}</p>
            

    </div>
  );
}

export default App;
