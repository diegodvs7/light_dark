import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`container ${theme}`}>
      <h1>Meu Projeto React</h1>

      <div>
      <Header onToggleTheme={toggleTheme} theme={theme} />
    </div>

    <div>
      <Card theme={theme} />
    </div>
    
    </div>

  );
}

export default App;
