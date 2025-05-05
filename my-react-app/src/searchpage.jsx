import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TripCard from './tripCard';
import FilterSidebar from './FilterSidebar';

const SearchPage = () => {
    const location = useLocation();
    const [trips, setTrips] = useState([]);
    const [filters, setFilters] = useState({
        priceMax: '',
        vehicleType: '',
        minRating: 0
    });

    // Simuler le chargement des données
    useEffect(() => {
        // Ici vous feriez normalement un appel API avec les paramètres de recherche
        const mockTrips = [
            {
                id: 1,
                driver: { name: 'Jean D.', rating: 4.5, avatar: '👨' },
                departure: 'Paris',
                destination: 'Lyon',
                date: '2023-06-15',
                time: '08:00',
                price: 25,
                seats: 3,
                vehicle: 'Peugeot 308'
            },
            // Plus de trajets...
        ];
        setTrips(mockTrips);
    }, [location.state]);

    return (
        <div className="search-page">
            <h2>Résultats de recherche</h2>

            <div className="search-content">
                <FilterSidebar filters={filters} setFilters={setFilters} />

                <div className="trip-results">
                    {trips.map(trip => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;