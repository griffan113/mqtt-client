import React, { createContext, useContext, useState } from 'react';
import { useMutation } from 'react-query';

import { IConnection } from '@/src/interfaces/IConnection';
import { queryClient } from '@/src/services/queryClient';

interface ICreateConnectiondDTO {
  title: string;
  uri: string;
  username?: string;
  password?: string;
}

interface MQTTContextData {
  CreateConnection(data: ICreateConnectiondDTO): Promise<IConnection>;
}

const MQTTContext = createContext<MQTTContextData>({} as MQTTContextData);

const MQTTProvider: React.FC = ({ children }) => {
  const [connections, setConnections] = useState<IConnection[]>(() => {
    const mqtt_connections = localStorage.getItem('@mqtt-connections');

    if (mqtt_connections) {
      const parsedConnections: IConnection[] = JSON.parse(mqtt_connections);

      return parsedConnections;
    }

    return [];
  });

  const CreateConnection = useMutation(async ({ title, uri, username, password }: ICreateConnectiondDTO) => {
    console.log(connections);
  }).mutateAsync;

  return <MQTTContext.Provider value={{ CreateConnection }}>{children}</MQTTContext.Provider>;
};

function useMQTT(): MQTTContextData {
  const context = useContext(MQTTContext);

  if (!context) {
    throw new Error('useMQTT must be used within a MQTTProvider');
  }

  return context;
}

export { MQTTProvider, useMQTT };
