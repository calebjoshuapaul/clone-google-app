import React from "react";
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
    {/* Welcome to Boogle, a google clone. */}
      <Router>
        <Routes>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
