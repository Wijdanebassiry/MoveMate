import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated, setUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ici vous feriez normalement un appel API pour la connexion
            // Simuler une connexion réussie
            setIsAuthenticated(true);
            setUser({ email: formData.email, name: 'Utilisateur' });
            navigate('/dashboard');
        } catch (err) {
            setError('Identifiants incorrects');
        }
    };

    return (
        <div className="auth-form">
            <h2>Connexion</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="btn-primary">Se connecter</button>
            </form>

            <div className="social-login">
                <button className="btn-google">Continuer avec Google</button>
                <button className="btn-facebook">Continuer avec Facebook</button>
            </div>

            <p className="auth-switch">
                Pas encore inscrit ? <span onClick={() => navigate('/signup')}>Créer un compte</span>
            </p>
        </div>
    );
};

export default Login;