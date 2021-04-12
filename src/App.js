import styles from './App.module.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Books } from "./Components/Books";
import { Dashboard } from "./Components/Dashboard";

export class App extends Component {
  render() {
    return (
      <Router>
        <div id='xdc' className={styles.App}>
          <h1>LIBRERIA NACIONAL</h1>
          <nav>
            <Link to="/dashboard">Libros</Link>
            <Link to="/books">Manejar Libros</Link>
          </nav>
          <Route exact path="/" component={Dashboard} />
          <Route path="/books" component={Books} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
