import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { queryClient } from "../hooks/queries";
import "../styles/globals.scss";
import Header from "../components/Layout/Header";
import { HostSplitProvider } from "../hooks/useHostSplit";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HostSplitProvider>
        <Header />
        <Component {...pageProps} />
      </HostSplitProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
