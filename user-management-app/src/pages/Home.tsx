import React, { useEffect } from 'react';
import Table from '../components/Table';
import '../styles/Home.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchUsers } from '../slices/userSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.users.loading);
  const error = useAppSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Users Table</h1>
      <Table />
    </div>
  );
};

export default Home;