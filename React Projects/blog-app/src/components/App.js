import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./About";


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Blog Town</h1>
          <Navbar />
        </header>
        <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path="/about">
           <About/>
         </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
