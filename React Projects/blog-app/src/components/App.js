import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./About";
import BlogDetail from "./BlogDetail";
import CreateBlog from "./CreateBlog";


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
         <Route path="/blogs/:id">
           <BlogDetail/>
         </Route> 
         <Route path="/createblog">
           <CreateBlog />
         </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
