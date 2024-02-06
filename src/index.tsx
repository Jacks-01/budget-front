import * as React from "react"
import {ChakraProvider} from "@chakra-ui/react"
import {extendTheme} from "@chakra-ui/react"
import * as ReactDOM from "react-dom/client"
import App from "./App"
import {Auth0Provider} from "@auth0/auth0-react"

const DOMAIN: string = import.meta.env.VITE_AUTH0_DOMAIN
const CLIENT_ID: string = import.meta.env.VITE_AUTH0_CLIENT_ID

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({colors})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      audience={'http://localhost:5173'}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
   >
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
