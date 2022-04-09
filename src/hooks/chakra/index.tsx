import React from "react";
import { ChakraProvider as Chakra } from "@chakra-ui/react";

import { theme } from "@/src/styles/theme";

export const ChakraProvider: React.FC = ({ children }) => {
  return <Chakra theme={theme}>{children}</Chakra>;
};
