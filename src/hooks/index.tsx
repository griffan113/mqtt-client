import React from "react";

import { ChakraProvider } from "./chakra";

export const AppProvider: React.FC = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
