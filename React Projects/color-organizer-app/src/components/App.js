import ColorList from './ColorList.js';
import AddColorForm from './AddColorForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Organizer App</h1>
      </header>
      <section>
        <AddColorForm />
        <ColorList />
      </section>
    </div>
  );
}

export default App;
