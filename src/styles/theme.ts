import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: 'blue.400',
      button_primary: 'blue.200',
      border_primary: 'blue.200',
      button_primary_hover: 'blue.100',
    },
  },
  fonts: {
    heading: 'Roboto Mono',
    body: 'Roboto Mono',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('gray.30', 'gray.900')(props),
        color: mode('gray.900', 'gray.50')(props),
      },
    }),
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});
