import { ThemeProvider } from "styled-components";

import Background from "../src/components/Background";
import theme from "../src/theme";
import "../styles/_normalize.scss";
import "../styles/baseStyles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Component {...pageProps} />
      </Background>
    </ThemeProvider>
  );
}

export default MyApp;
