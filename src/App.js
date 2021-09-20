import React, { useState } from 'react';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';

const App = () => {
  const [themeColor, setThemeColor] = useState('white');

  const toggleThemeColor = () => {
    setThemeColor(prev => prev === 'white' ? 'dark' : 'white');
  };

  return (
    <div className={`app ${themeColor}`}>
      <div className="container">
        <h1>App</h1>
        <Counter />
        <SearchForm />
        <hr />
        <button 
          className="btn btn-primary"
          onClick={toggleThemeColor}
        >Change theme</button>
      </div>
    </div>
  )
};

 export default App;