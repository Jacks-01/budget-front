import * as React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {extendTheme} from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({colors});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
