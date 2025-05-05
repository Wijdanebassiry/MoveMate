import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    return (
        <div className="filter-sidebar">
            <h3>Filtrer</h3>

            <div className="filter-group">
                <label>Prix maximum</label>
                <select
                    name="priceMax"
                    value={filters.priceMax}
                    onChange={handleChange}
                >
                    <option value="">Tous</option>
                    <option value="10">Moins de 10€</option>
                    <option value="20">Moins de 20€</option>
                    <option value="30">Moins de 30€</option>
                    <option value="50">Moins de 50€</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Type de véhicule</label>
                <select
                    name="vehicleType"
                    value={filters.vehicleType}
                    onChange={handleChange}
                >
                    <option value="">Tous</option>
                    <option value="sedan">Berline</option>
                    <option value="suv">SUV</option>
                    <option value="electric">Électrique</option>
                    <option value="hybrid">Hybride</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Note minimum</label>
                <div className="rating-filter">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={star <= filters.minRating ? 'active' : ''}
                            onClick={() => setFilters({...filters, minRating: star})}
                        >
              ★
            </span>
                    ))}
                </div>
            </div>

            <button
                className="btn-reset"
                onClick={() => setFilters({
                    priceMax: '',
                    vehicleType: '',
                    minRating: 0
                })}
            >
                Réinitialiser
            </button>
        </div>
    );
};

export default FilterSidebar;