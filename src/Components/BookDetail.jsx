import React, { Component } from "react";
import styles from '../App.module.css';
//import axios from "axios";

export class BookDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        id: 0,
        title: "",
        category: ""
      }
    };
  }
/*
  componentDidMount() {
    this.fetchBook(this.props.match.params.id);
  }

  fetchBook = id => {
    console.log("fetch  xx " + id);
    
    axios.get("http://localhost:5000/books/" + id).then(response => {
      console.log(response.data);
      console.log(response.status);
      this.setState({
        book: response.data
      });
    });
  };

  update = event =>
    this.setState({
      book: {
        ...this.state.book,
        title: event.target.value
      }
    });

  save = () => {
    axios
      .put("http://localhost:5000/books/" + this.state.book.id, this.state.book)
      .then(response => {
        this.props.history.goBack();
      });
  };

  goBack = () => {
    this.props.history.goBack();
  };
*/
  render() {
    const { book } = this.state;
    return book ? (
      <div>
        <h2>book.title Informacion!</h2>
        <div>
          <label>id: </label>
          {book.id}
        </div>
        <div>
          <label>Titulo: </label>
          <input
            value={this.state.book.title}
            onChange={this.update}
            placeholder="title"
          />
        </div>
        <button onClick={this.goBack}>Volver</button>
        <button onClick={this.save}>Guardar</button>
      </div>
    ) : (
      <div />
    );
  }
}
