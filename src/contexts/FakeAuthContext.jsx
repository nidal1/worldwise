import { createContext, useContext } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'login':
      return { ...state, user: payload, isAuthenticated: true };

    case 'logout':
      return { ...initialState };

    default:
      throw new Error('Invalid action type: ' + type);
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(first, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: 'logout' });
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext();
  if (context === undefined)
    throw new Error('useAuth called outside of AuthProvider');
  return context;
}

export { useAuth, AuthProvider };
