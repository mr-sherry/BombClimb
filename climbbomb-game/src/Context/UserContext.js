import { createContext, useContext } from 'react';

export const UserContext = createContext({
  users: [],
  currentUser: null,
  login: (username, password) => {},
  register: (username, password, email, fullName) => {},
  logout: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = UserContext.Provider;
