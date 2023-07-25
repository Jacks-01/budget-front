import React from 'react';
import axios from 'axios';
const SERVER = import.meta.env.VITE_SERVER;

const Transactions: React.FC = () => {
    React.useEffect(() => {
        const getAccessToken = async () => {
            let response = await axios.get(`${SERVER}/transactions/get`);
            console.log('transactions yo:', response.data);
        }
    }, [])
    return (
        <>
            <h1>Transactions Start Here</h1>
            
        </>
    )
}

export default Transactions;