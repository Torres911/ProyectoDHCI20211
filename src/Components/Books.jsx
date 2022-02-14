import React from "react";
//import axios from "axios";
import { Link } from "react-router-dom";

export class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      inputContent: "",
      selectedBook: null
    };
  }
/*
  componentDidMount() {
    this.refreshList();
  }

  resetTitle = () => {
    this.setState({
      inputContent: ""
    });
  };

  refreshList = () => {
    axios.get("http://localhost:5000/books").then(response => {
      console.log(response.data);
      console.log(response.status);
      this.setState({
        books: response.data
      });
    });
  };

  add = titlenew => {
    console.log("add title: " + titlenew);
    if (titlenew) {
      axios
        .post("http://localhost:5000/books", {
          id: undefined,
          title: titlenew,
          category: "web"
        })
        .then(response => {
          this.refreshList();
          this.resetTitle();
        });
    }
  };

  remove = bookId => {
    axios.delete("http://localhost:5000/books/" + bookId).then(response => {
      console.log(response.data);
      console.log(response.status);

      this.setState({
        selectedBook: false,
        books: this.state.books.filter(e => e.id !== bookId)
      });
    });
  };
*/
  render() {
    return (
      <div>
        <h2>Libreria</h2>
        <div>
          <label>Titulo del Libro:</label>
        </div>
      </div>
    );
  }
}
