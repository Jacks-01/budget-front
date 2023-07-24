import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@cloudscape-design/components';

import { usePlaidLink, PlaidLinkOnSuccess } from 'react-plaid-link';

const SERVER = import.meta.env.VITE_SERVER;
interface props {
	plaidLink: string;
}

const Link: React.FC<props> = (props) => {
	const [token, setToken] = useState<string | null>(null);
	const [publicToken, setPublicToken] = useState<string | null>(null);

	React.useEffect(() => {
		const getLinkToken = async () => {
			let response = await axios.get(`${SERVER}/create_link_token`);
			console.log(response.data);
			setToken(response.data.link_token);
		};
		getLinkToken();
	}, []);

	const onSuccess = useCallback<PlaidLinkOnSuccess>(
		(publicToken, metadata) => {
			// send public_token to your server
			// https://plaid.com/docs/api/tokens/#token-exchange-flow
			console.log(publicToken, metadata);
		},
		[]
	);

	const { open, ready } = usePlaidLink({
		token,
		onSuccess
	});

	return (
		<>
			<Button
				onClick={() => open()}
				disabled={!ready}>
				Connect a bank account
			</Button>
			<a>{props.plaidLink}</a>
		</>
	);
};

export default Link;
