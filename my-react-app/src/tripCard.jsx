import React from 'react';
import { useNavigate } from 'react-router-dom';

const TripCard = ({ trip }) => {
    const navigate = useNavigate();

    return (
        <div className="trip-card">
            <div className="trip-header">
                <div className="driver-info">
                    <span className="driver-avatar">{trip.driver.avatar}</span>
                    <span className="driver-name">{trip.driver.name}</span>
                    <span className="driver-rating">⭐ {trip.driver.rating}</span>
                </div>
            </div>

            <div className="trip-details">
                <div className="route">
                    <span className="departure">{trip.departure}</span>
                    <span className="arrow">→</span>
                    <span className="destination">{trip.destination}</span>
                </div>

                <div className="datetime">
                    <span>{trip.date} à {trip.time}</span>
                </div>

                <div className="vehicle-info">
                    <span>{trip.vehicle}</span>
                    <span>{trip.seats} places disponibles</span>
                </div>
            </div>

            <div className="trip-footer">
                <span className="price">{trip.price}€</span>
                <button
                    className="btn-book"
                    onClick={() => navigate(`/trip/${trip.id}`)}
                >
                    Réserver
                </button>
            </div>
        </div>
    );
};

export default TripCard;