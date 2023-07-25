import '@cloudscape-design/global-styles/index.css';
import Link from './Link/Link';
import React from 'react';
import Transactions from './Transactions/Transactions';

export const App = () => (
	<>
		<h1>this is my budget app</h1>
		<Transactions />
		{/* <Link/> */}
	</>
);
