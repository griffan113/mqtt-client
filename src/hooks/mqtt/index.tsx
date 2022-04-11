import React, { createContext, useContext, useState } from 'react';

interface MQTTContextData {}

const MQTTContext = createContext<MQTTContextData>({} as MQTTContextData);

const MQTTProvider: React.FC = ({ children }) => {
  const [connections, setConnections] = useState();

  return <MQTTContext.Provider value={{}}>{children}</MQTTContext.Provider>;
};

function useMQTT(): MQTTContextData {
  const context = useContext(MQTTContext);

  if (!context) {
    throw new Error('useMQTT must be used within a MQTTProvider');
  }

  return context;
}

export { MQTTProvider, useMQTT };
