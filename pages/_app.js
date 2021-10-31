import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { queryClient } from "../hooks/queries";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
