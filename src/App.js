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
        <h1>App title</h1>
        <Counter />
        <SearchForm />
        <hr />
        <button 
          className="btn btn-primary"
          onClick={toggleThemeColor}
        >Change theme</button>
        <hr />
        <p>Some new text</p>
        <p>
          <button className="btn btn-primary">Some button</button>
        </p>
      </div>
    </div>
  )
};

 export default App;