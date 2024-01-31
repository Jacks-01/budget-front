import {useAuth0} from "@auth0/auth0-react"
import {Button} from "@chakra-ui/react"
import React from "react"

const LogoutButton: React.FC = () => {
  const {logout} = useAuth0()

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }

  return <Button variant="ghost" onClick={handleLogout}>Sign Out</Button>
}

export default LogoutButton
