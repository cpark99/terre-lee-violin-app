import React from 'react';

export const nullUser = {
  tags: []
};

const UserContext = React.createContext({
  user: nullUser,
  user_id: '',
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  clearUser: () => {},
  setUserId: () => {},
  updateUser: () => {},
  toggleSidebarNav: () => {}
});

export default UserContext;
