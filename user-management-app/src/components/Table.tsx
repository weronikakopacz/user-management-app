import React, { useState } from "react";
import '../styles/Table.css';
import { User } from "../models/IUser";

interface TableProps {
    users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {
    const [filters, setFilters] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
    });

    const handleFilterChange = (filterName: keyof typeof filters, value: string) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const filteredUsers = users.filter(user => {
        return (
            user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
            user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
            user.phone.toLowerCase().includes(filters.phone.toLowerCase())
        );
    });

    const headers = ['Name', 'Username', 'Email', 'Phone'];
    const filterKeys: Array<keyof typeof filters> = ['name', 'username', 'email', 'phone'];
    
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {filterKeys.map(key => (
                            <td key={key}>
                                <input
                                    type="text"
                                    placeholder={`Search by ${key}...`}
                                    value={filters[key]}
                                    onChange={(e) => handleFilterChange(key, e.target.value)}
                                />
                            </td>
                        ))}
                    </tr>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={headers.length}>No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;