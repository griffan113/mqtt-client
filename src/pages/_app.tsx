import type { AppProps } from "next/app";

import { ChakraProvider } from "@/src/hooks/chakra";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
