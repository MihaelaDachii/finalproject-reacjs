import React, { useState, useEffect } from "react";
import mockData from "./Mock"; 
import "./SearchBar.css"; 

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const results = [];

      for (const location in mockData.data) {
        if (location.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push(location);
        }
      }

      setSearchResults(results);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const initiateSearch = (term) => {
    const destinationInfo = mockData.data[term];
    if (destinationInfo) {
      // Afișează informațiile despre destinație
      console.log("Informații despre destinație:", destinationInfo);
    } else {
      console.log("Destinație necunoscută");
    }
  };

  const handleSearchButtonClick = () => {
    initiateSearch(searchTerm); // Inițiază căutarea folosind funcția initiateSearch
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      initiateSearch(searchTerm);
    }
  };

  const handleResultClick = (location) => {
    initiateSearch(location);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a location"
        value={searchTerm}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <ul>
        {searchResults.map((location) => (
          <li key={location} onClick={() => handleResultClick(location)}>
            {location}
          </li>
        ))}
      </ul>
      <button className="search-button" onClick={handleSearchButtonClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

