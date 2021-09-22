import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog Town</h1>
        <Navbar />
      </header>
      <Home />
    </div>
  );
}

export default App;
