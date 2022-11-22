import { UserProvider } from "@auth0/nextjs-auth0";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserProvider>
    </>
  );
}

export default App;
