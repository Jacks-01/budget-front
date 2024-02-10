import React from "react"
import axios from "axios"
import {Button} from "@chakra-ui/react"
import {useAuth0} from "@auth0/auth0-react"

const Home: React.FC = () => {
  const {user, isAuthenticated, getAccessTokenSilently} = useAuth0()

  const testApi = async () => {
    try {
      const token = await getAccessTokenSilently()
      const response = await axios.post("http://localhost:8000/budget/create", {
        email: user?.email
      }, {
        headers: { Authorization: `Bearer ${token}` }, 
      })

      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Home Page</h1>
      <Button onClick={testApi}>Test</Button>
    </>
  )
}

export default Home
