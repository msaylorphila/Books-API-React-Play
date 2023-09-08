import logo from "./logo.svg";
import "./App.css";
// import { googleBooks } from './utils/Api';
import React, { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const googleBooks = async (query) => {
    console.log("hello");
    try {
      const getBook = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      const data = await getBook.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
    googleBooks(searchQuery);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSearch}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="...Search"
          ></input>
          <button type="submit">Search</button>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
