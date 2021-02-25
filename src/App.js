import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home/home.jsx"
import Login from "./components/login/login.jsx"
import Signup from "./components/signup/signup.jsx"
import Dashboard from "./components/dashboard/dashboard.jsx"

var FontAwesome = require('react-fontawesome')

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <nav className="nav">
            <Link to="/" className="first">Home</Link>
            <Link to="/login" className="one">login</Link>
            <Link to="/signup" className="two">Signup</Link>
            <Link to="/dashboard" className="three"><FontAwesome className="fas fa-user-circle" /></Link>
            <Link to="/cart" className="three"><FontAwesome className="fas fa-shopping-cart" /></Link>
          </nav>
        </div>

        <Switch>

          <Route exact={true} path="/">
            <Home />
          </Route>

          <Route exact={true} path="/login">
            <Login />
          </Route>


          <Route path="/dashboard">
            <Dashboard />
          </Route>


          <Route path="/signup">
            <Signup />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;