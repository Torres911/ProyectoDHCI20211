import React, { Component } from "react";
import styles from '../App.module.css';
//import axios from "axios";
import { Link } from "react-router-dom";

export class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
/*
  search = event => {
    console.log(event.target.value);
    axios
      .get("http://localhost:5000/books/?q=" + event.target.value)
      .then(response => {
        console.log(response.data);
        console.log(response.status);
        this.setState({
          books: response.data
        });
      });
  };
*/
  render() {
    const books = this.state.books.map(book => {
      return (
        <div key={book.id} className={styles.searchresult}>
          <Link to={`/detail/${book.id}`}>{book.title}</Link>
        </div>
      );
    });
    return (
      <div id="search-component">
        <h4>Buscar en la Libreria</h4>
        <input id="search-box" onKeyUp={this.search} />
        <div>{books}</div>
      </div>
    );
  }
}
