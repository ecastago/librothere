import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Login, Navbar, Recuperar, Registro } from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registro">registro</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Navbar/>
          </Route>
          <Route path="/registro">
            <Registro/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/recuperar">
            <Recuperar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}