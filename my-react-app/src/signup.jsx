import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: 'passenger'
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Nom requis';
        if (!formData.email.includes('@')) newErrors.email = 'Email invalide';
        if (formData.password.length < 6) newErrors.password = 'Le mot de passe doit faire au moins 6 caractères';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Ici vous feriez normalement un appel API pour l'inscription
        console.log('Inscription réussie', formData);
        navigate('/login');
    };

    return (
        <div className="auth-form">
            <h2>Créer un compte</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nom complet</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Numéro de téléphone</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <div className="form-group">
                    <label>Confirmer le mot de passe</label>
                    <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        required
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>

                <div className="form-group">
                    <label>Je suis principalement:</label>
                    <div className="role-selector">
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="passenger"
                                checked={formData.role === 'passenger'}
                                onChange={() => setFormData({...formData, role: 'passenger'})}
                            />
                            Passager
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="driver"
                                checked={formData.role === 'driver'}
                                onChange={() => setFormData({...formData, role: 'driver'})}
                            />
                            Conducteur
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn-primary">S'inscrire</button>
            </form>

            <p className="auth-switch">
                Déjà inscrit ? <span onClick={() => navigate('/login')}>Se connecter</span>
            </p>
        </div>
    );
};

export default Signup;