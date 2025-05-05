import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TripCard from './tripCard'; // Assume we have this component
import './App.css'; // Styling file

const UserDashboard = ({ user }) => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [trips, setTrips] = useState({
        upcoming: [],
        past: [],
        asDriver: []
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserTrips = async () => {
            try {
                // Simulating API call - replace with actual fetch
                const mockData = {
                    upcoming: [
                        {
                            id: 1,
                            departure: 'Paris',
                            destination: 'Lyon',
                            date: '2023-06-20',
                            time: '08:00',
                            price: 25,
                            seats: 3,
                            vehicle: 'Peugeot 308',
                            passengers: [
                                { name: 'Alice', rating: 4.5 },
                                { name: 'Bob', rating: 4.0 }
                            ]
                        }
                    ],
                    past: [
                        {
                            id: 2,
                            departure: 'Lyon',
                            destination: 'Marseille',
                            date: '2023-05-15',
                            price: 30,
                            rating: 4.5,
                            review: 'Great trip!'
                        }
                    ],
                    asDriver: [
                        {
                            id: 3,
                            departure: 'Paris',
                            destination: 'Toulouse',
                            date: '2023-06-25',
                            earnings: 75,
                            passengers: 3
                        }
                    ]
                };

                setTrips(mockData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching trips:", error);
                setLoading(false);
            }
        };

        fetchUserTrips();
    }, [user]);

    const handleCancelTrip = (tripId) => {
        // API call to cancel trip would go here
        setTrips(prev => ({
            ...prev,
            upcoming: prev.upcoming.filter(trip => trip.id !== tripId)
        }));
    };

    const handleLeaveReview = (tripId, review) => {
        // API call to submit review would go here
        console.log(`Review for trip ${tripId}:`, review);
    };

    if (loading) return <div className="loading">Chargement...</div>;

    return (
        <div className="user-dashboard">
            <div className="profile-header">
                <h2>Bonjour, {user?.name || 'Utilisateur'}</h2>
                <div className="user-stats">
                    <div className="stat-card">
                        <span className="stat-value">{trips.upcoming.length}</span>
                        <span className="stat-label">Trajets à venir</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{trips.past.length}</span>
                        <span className="stat-label">Trajets passés</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{trips.asDriver.length}</span>
                        <span className="stat-label">Conduits</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-tabs">
                <button
                    className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                    onClick={() => setActiveTab('upcoming')}
                >
                    Mes prochains trajets
                </button>
                <button
                    className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
                    onClick={() => setActiveTab('past')}
                >
                    Historique
                </button>
                <button
                    className={`tab-btn ${activeTab === 'asDriver' ? 'active' : ''}`}
                    onClick={() => setActiveTab('asDriver')}
                >
                    Conducteur
                </button>
            </div>

            <div className="trips-container">
                {activeTab === 'upcoming' && (
                    <div className="trips-list">
                        {trips.upcoming.length > 0 ? (
                            trips.upcoming.map(trip => (
                                <TripCard
                                    key={trip.id}
                                    trip={trip}
                                    type="upcoming"
                                    onCancel={handleCancelTrip}
                                />
                            ))
                        ) : (
                            <p className="no-trips">Aucun trajet à venir</p>
                        )}
                    </div>
                )}

                {activeTab === 'past' && (
                    <div className="trips-list">
                        {trips.past.length > 0 ? (
                            trips.past.map(trip => (
                                <TripCard
                                    key={trip.id}
                                    trip={trip}
                                    type="past"
                                    onReview={handleLeaveReview}
                                />
                            ))
                        ) : (
                            <p className="no-trips">Aucun trajet passé</p>
                        )}
                    </div>
                )}

                {activeTab === 'asDriver' && (
                    <div className="trips-list">
                        {trips.asDriver.length > 0 ? (
                            trips.asDriver.map(trip => (
                                <TripCard
                                    key={trip.id}
                                    trip={trip}
                                    type="driver"
                                />
                            ))
                        ) : (
                            <p className="no-trips">Aucun trajet en tant que conducteur</p>
                        )}
                    </div>
                )}
            </div>

            <div className="quick-actions">
                <button
                    className="action-btn primary"
                    onClick={() => navigate('/create-trip')}
                >
                    Proposer un trajet
                </button>
                <button
                    className="action-btn secondary"
                    onClick={() => navigate('/search')}
                >
                    Rechercher un trajet
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;