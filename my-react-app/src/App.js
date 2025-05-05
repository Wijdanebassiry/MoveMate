import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import des composants
import HomePage from './homepage.jsx';
import SearchPage from './searchpage';
import UserDashboard from './userdashboard';
import TripDetails from './tripCard';
import Login from './login';
import Signup from './signup';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/dashboard" element={<UserDashboard user={user} />} />
                    <Route path="/trip/:id" element={<TripDetails />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;