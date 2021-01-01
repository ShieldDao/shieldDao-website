/**
 * Global App Provider for passing down authenticated user, notifications and other global stuff
 */
import { createContext } from 'react';

export const appContext = createContext({});

export const AppProvider = (props) => {
  return <appContext.Provider value={{}}>{props.children}</appContext.Provider>;
};
