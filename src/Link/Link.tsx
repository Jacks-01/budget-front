import React from "react";
import axios from 'axios';
import { Button } from "@cloudscape-design/components";
import { useState } from "react";


const SERVER = import.meta.env.VITE_SERVER
interface props {
    plaidLink: string
}

const Link: React.FC<props> = (props) => {
    const [link, setLink] = useState({});
    const getLink = async () => {
        let response = await axios.get(`${SERVER}/create_link_token`);
        console.log(response.data);
        setLink({ response })
        

    }
    return ( 
        <>
            <Button onClick={getLink}>Get Link</Button>
            <a>{props.plaidLink}</a>
        </>

     );
}
 
// export default Link;

// // The usePlaidLink hook manages Plaid Link creation
// // It does not return a destroy function;
// // instead, on unmount it automatically destroys the Link instance
// const config: PlaidLinkOptions = {
//     onSuccess: (public_token, metadata) => {}
//     onExit: (err, metadata) => {}
//     onEvent: (eventName, metadata) => {}
//     token: 'GENERATED_LINK_TOKEN',
//     //required for OAuth; if not using OAuth, set to null or omit:
//     receivedRedirectUri: window.location.href,
//   };
  
//   const { open, exit, ready } = usePlaidLink(config);