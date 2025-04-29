import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';


function App() {
    const { user, loginWithRedirect, isAuthenticated, logout, isLoading, error } = useAuth0();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Oops! {error.message}</div>;

    return (
        <div className="App">
            <header className="App-header">
                {isAuthenticated && <h3>Hello {user.name}</h3>}

                {isAuthenticated ? (
                    <button onClick={() => logout()}>
                        Logout
                    </button>

                ) : (
                    <button onClick={() => loginWithRedirect()}>
                        Login
                    </button>
                )}
            </header>
        </div>

    );

}

export default App;
