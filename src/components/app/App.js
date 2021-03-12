import logo from './logo.png';
import './App.css';
import React, {useEffect, useState} from 'react';
import SearchBar from '../searchBar/SearchBar';
import Select from '../subredditSelection/subRedditSelection';
import SearchResults from '../searchResults/searchResults';
import {subRedditFetch, subRedditTermFetch} from '../../util/redditAPI';

function App() {
  const [sr, setSr] = useState("r/funny");
  const [term, setTerm] = useState();
  const [posts, setPosts] = useState([]);

  const searchTerm = (searchTerm) => {
    setTerm(searchTerm);
    setSr("");
  };

  const selectSub = (selected) => {
    setSr(selected);
  };

  useEffect(() => {
    async function fetchSub() {
      const response = await subRedditFetch(sr);
      setPosts(response);
    }
    fetchSub();
  },[sr]);

  useEffect(() => {
    if(term) {
      async function fetchSub() {
        const response = await subRedditTermFetch(term);
        setPosts(response);
      }
      fetchSub();
    }

  },[term]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img alt="reddit logo" src={logo} />
        <h6>REDDIT<span>min</span></h6>
        <SearchBar 
          searchTerm   =  {searchTerm}
          subReddit   =  {sr} />
      </header>
      <Select 
        subSelect = {selectSub}/>
      < SearchResults 
        posts = {posts}
      />
    </div>
  );
};

export default App;
