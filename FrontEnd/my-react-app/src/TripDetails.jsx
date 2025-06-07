import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TripDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [seats, setSeats] = useState(1);

    useEffect(() => {
        // Simuler le chargement des données
        setTimeout(() => {
            setTrip({
                id: id,
                driver: {
                    name: 'Jean D.',
                    rating: 4.5,
                    avatar: '👨',
                    joinedDate: '2022-01-15',
                    tripsCompleted: 24
                },
                departure: 'Paris',
                destination: 'Lyon',
                date: '2023-06-15',
                time: '08:00',
                price: 25,
                seatsAvailable: 3,
                vehicle: 'Peugeot 308',
                estimatedDuration: '4h30',
                description: 'Trajet direct sur autoroute, possibilité de faire des pauses si besoin.'
            });
            setLoading(false);
        }, 500);
    }, [id]);

    const handleBooking = () => {
        // Logique de réservation
        alert(`Réservation confirmée pour ${seats} place(s) !`);
        navigate('/dashboard');
    };

    if (loading) return <div>Chargement...</div>;
    if (!trip) return <div>Trajet non trouvé</div>;

    return (
        <div className="trip-details">
            <div className="trip-header">
                <h2>{trip.departure} → {trip.destination}</h2>
                <p>{trip.date} à {trip.time} • {trip.estimatedDuration}</p>
            </div>

            <div className="trip-content">
                <div className="driver-section">
                    <div className="driver-info">
                        <div className="driver-avatar">{trip.driver.avatar}</div>
                        <div>
                            <h3>{trip.driver.name}</h3>
                            <p>⭐ {trip.driver.rating} ({trip.driver.tripsCompleted} trajets)</p>
                            <p>Membre depuis {new Date(trip.driver.joinedDate).getFullYear()}</p>
                        </div>
                    </div>

                    <div className="vehicle-info">
                        <h4>Véhicule</h4>
                        <p>{trip.vehicle}</p>
                        <p>{trip.seatsAvailable} places disponibles</p>
                    </div>
                </div>

                <div className="trip-description">
                    <h4>Description</h4>
                    <p>{trip.description}</p>
                </div>

                <div className="booking-section">
                    <h3>Prix: {trip.price}€ par personne</h3>
                    <div className="seats-selector">
                        <label>Nombre de places:</label>
                        <input
                            type="number"
                            min="1"
                            max={trip.seatsAvailable}
                            value={seats}
                            onChange={(e) => setSeats(Math.min(parseInt(e.target.value), trip.seatsAvailable))}
                        />
                    </div>
                    <button className="btn-book" onClick={handleBooking}>
                        Réserver pour {seats * trip.price}€
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TripDetails;