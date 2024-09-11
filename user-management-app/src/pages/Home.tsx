import React, { useEffect, useState } from 'react';
import { User } from '../models/IUser';
import Table from '../components/Table';
import { getAllUsers } from '../services/UserService';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        setError('Failed to load users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Users Table</h1>
      <Table users={users} />
    </div>
  );
};

export default Home;