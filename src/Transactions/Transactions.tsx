import React from 'react';
import axios from 'axios';
import { Button } from '@cloudscape-design/components';
const SERVER = import.meta.env.VITE_SERVER;

const Transactions: React.FC = () => {

    React.useState
    // React.useEffect(() => {
        
    // }, [])

    const transactions = async () => {
        let response = await axios.get(`${SERVER}/transactions/get`);
        console.log('transactions yo:', response.data);
    }

    return (
        <>
            <h1>Transactions Start Here</h1>
            <Button onClick={() => transactions()}>get transactions</Button>
            
        </>
    )
}

export default Transactions;