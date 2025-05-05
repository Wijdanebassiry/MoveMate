import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './headre';

const HomePage = ({ isAuthenticated }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        departure: '',
        destination: '',
        date: ''
    });

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/search', { state: searchParams });
    };

    return (
        <div className="home-page">
            <Header isAuthenticated={isAuthenticated} />

            <main className="hero-section">
                <h1>Partagez vos trajets, réduisez vos coûts</h1>
                <p>Rejoignez la communauté de covoiturage durable</p>

                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Départ"
                        value={searchParams.departure}
                        onChange={(e) => setSearchParams({...searchParams, departure: e.target.value})}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Destination"
                        value={searchParams.destination}
                        onChange={(e) => setSearchParams({...searchParams, destination: e.target.value})}
                        required
                    />
                    <input
                        type="date"
                        value={searchParams.date}
                        onChange={(e) => setSearchParams({...searchParams, date: e.target.value})}
                        required
                    />
                    <button type="submit" className="btn-primary">Rechercher</button>
                </form>
            </main>

            <section className="features-section">
                <div className="feature-card">
                    <div className="icon">🚗</div>
                    <h3>Économique</h3>
                    <p>Partagez les frais de trajet</p>
                </div>
                <div className="feature-card">
                    <div className="icon">🌱</div>
                    <h3>Écologique</h3>
                    <p>Réduisez votre empreinte carbone</p>
                </div>
                <div className="feature-card">
                    <div className="icon">🔒</div>
                    <h3>Sécurisé</h3>
                    <p>Conducteurs vérifiés</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;