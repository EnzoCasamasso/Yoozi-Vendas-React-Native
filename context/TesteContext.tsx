import { createContext } from "react";

export const TesteContext = createContext({test: 'test', value: 10});

const TestProvider = ({children}) => {
    return (
      <TesteContext.Provider value={{test: 'test', value: 10}}>
        {children}
      </TesteContext.Provider>
    );
  };
  
  export default TestProvider;