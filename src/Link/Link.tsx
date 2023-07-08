import React from "react";
import axios from 'axios';
import { Button } from "@cloudscape-design/components";
import { useState } from "react";


const SERVER = import.meta.env.VITE_SERVER
interface props {
    plaidLink: string   
}

const Link: React.FC<props> = (props) => {
    const [, set] = useState();
    const getLink = async () => {
        let response = await axios.get(`${SERVER}/create_link_token`)
        

    }
    return ( 
        <>
            <Button onClick={getLink}>Get Link</Button>
            <a>{props.plaidLink}</a>
        </>

     );
}
 
export default Link;