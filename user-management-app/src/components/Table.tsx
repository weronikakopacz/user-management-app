import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../slices/filterSlice';
import { selectFilteredUsers } from '../slices/userSlice';
import '../styles/Table.css';
import { AppDispatch, RootState } from '../store/store';

const Table: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const filteredUsers = useSelector(selectFilteredUsers);
  const filters = useSelector((state: RootState) => state.filters);

  const handleFilterChange = (filterName: keyof typeof filters, value: string) => {
    dispatch(setFilter({ filter: filterName, value }));
  };

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
              <th key={key}>
                <input
                  type="text"
                  placeholder={`Search by ${key}...`}
                  value={filters[key]}
                  onChange={(e) => handleFilterChange(key, e.target.value)}
                />
              </th>
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