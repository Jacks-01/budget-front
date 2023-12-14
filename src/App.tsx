import Link from './Link/Link';
import React from 'react';
import Transactions from './Transactions/Transactions';
import Nav from './Navbar/Navbar';

//! Uncomment Link to initiate token exchange and recieve data

export const App = () => (
	<>
		<Nav/>
		<h1>this is my budget app</h1>
		<Transactions />
		{/* <Link/> */}
	</>
);
