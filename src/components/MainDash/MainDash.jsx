import React  from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import { useState } from 'react';

import "./MainDash.css";
const MainDash = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchQuery);
  };
  return (
    <div className="MainDash">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent:"flex-end"}}>
        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            style={{ padding: '5px', border: '1px solid #fff', borderRadius: '3px', marginRight: '5px' }}
          />
          <button onClick={handleSearch} style={{ padding: '5px 10px', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.397l3.85 3.85a1 1 0 0 0 1.415-1.413l-3.848-3.834zm-4.242 0a5 5 0 1 1 1.397-1.397A5 5 0 0 1 7.5 10.344z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
