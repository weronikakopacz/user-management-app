import React from "react";
import './Table.css';
import { User } from "../models/IUser";

interface TableProps {
    users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
   )
}

export default Table;