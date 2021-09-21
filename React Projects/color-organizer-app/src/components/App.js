import React, { useState } from 'react';
import colorData from '../data/color-data.json';
import ColorList from './ColorList.js';
import AddColorForm from './AddColorForm';
import { v4 } from "uuid";

function App() {
  const [colors,setColors] = useState(colorData);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Organizer App</h1>
      </header>
      <section>
        <AddColorForm 
          onAddNewColor={ (title,color) => {
              const newColors = [
                ...colors,
                {
                  id:v4(),
                  title:title,
                  color:color,
                  rating:0
                }
              ];
              setColors(newColors);
            }
          }
        />
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
