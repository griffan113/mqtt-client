import React from 'react';

import { ChakraProvider } from './chakra';
import { MQTTProvider } from './mqtt';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider>
      <MQTTProvider>{children}</MQTTProvider>
    </ChakraProvider>
  );
};
