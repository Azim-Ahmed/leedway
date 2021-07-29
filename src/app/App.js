import { createContext, useState } from 'react';
import AppRouter from './AppRouter';


export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  const globalStates = {
    user: [loggedInUser, setLoggedInUser],
  };
  return (
    <UserContext.Provider value={globalStates}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
