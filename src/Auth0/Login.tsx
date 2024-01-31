import React from "react"
import {useAuth0} from "@auth0/auth0-react"
import {Button} from "@chakra-ui/react"

const LoginButton: React.FC = () => {
  const {loginWithRedirect} = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        prompt: "login",
      },
    })
  }

  return (
    <Button variant="ghost" onClick={handleLogin}>
      Sign in
    </Button>
  )
}

export default LoginButton
