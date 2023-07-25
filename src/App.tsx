import '@cloudscape-design/global-styles/index.css';
import Button from '@cloudscape-design/components/button';
import FileUpload from '@cloudscape-design/components/file-upload';
import FormField from '@cloudscape-design/components/form-field';
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
