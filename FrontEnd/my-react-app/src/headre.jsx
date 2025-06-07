import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
    const navigate = useNavigate();

    return (
        <header className="app-header">
            <div className="logo" onClick={() => navigate('/')}>MOVEMATE</div>

            <nav className="nav-links">
                <Link to="/search">Rechercher un trajet</Link>
                {isAuthenticated && <Link to="/dashboard">Mon tableau de bord</Link>}
            </nav>

            <div className="auth-buttons">
                {isAuthenticated ? (
                    <button className="btn-logout" onClick={() => {/* Logout logic */}}>
                        Déconnexion
                    </button>
                ) : (
                    <>
                        <button className="btn-login" onClick={() => navigate('/login')}>Connexion</button>
                        <button className="btn-signup" onClick={() => navigate('/signup')}>Inscription</button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;