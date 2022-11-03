import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
    </>
  );
}

export default App;
