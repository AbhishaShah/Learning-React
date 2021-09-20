import React, { useState } from 'react';
import colorData from '../data/color-data.json';
import ColorList from './ColorList.js';

function App() {
  const [colors,setColors] = useState(colorData);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Organizer App</h1>
      </header>
      <section>
        <ColorList 
            colors={colors} 
            onRemoveColor={id => {
              const newColors = colors.filter( color => color.id !== id);
              setColors(newColors);
            }
          }
            onRateColor={ (id,rating) => {
              const newColors = colors.map(color => color.id === id ? {...color, rating} : color);
              setColors(newColors);
              }
            }
        />
      </section>
    </div>
  );
}

export default App;
