import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
    filters: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
    onFilterChange: (filterName: string, value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filters, onFilterChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    return (
        <div className="search-bars">
            <input
                type="text"
                name="name"
                placeholder="Filter by name"
                value={filters.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="username"
                placeholder="Filter by username"
                value={filters.username}
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="Filter by email"
                value={filters.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Filter by phone"
                value={filters.phone}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;