import React from "react";
import axios from "axios";
import {usePlaidLink, PlaidLinkOnSuccess} from "react-plaid-link";
import {Button} from "@chakra-ui/button";
import {RepeatIcon} from "@chakra-ui/icons";

const SERVER = import.meta.env.VITE_SERVER;

const Link: React.FC = () => {
  const [token, setToken] = React.useState<string | null>(null);
  const [publicToken, setPublicToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getLinkToken = async () => {
      const response = await axios.get(`${SERVER}/create_link_token`);
      console.log(response.data);
      setToken(response.data.link_token);
    };
    getLinkToken();
  }, []);

  const onSuccess = React.useCallback<PlaidLinkOnSuccess>(
    (publicToken, metadata) => {
      setPublicToken(publicToken);
      axios.post(`${SERVER}/token_exchange`, {
        public_token: publicToken,
      });
      // send public_token to your server
      // https://plaid.com/docs/api/tokens/#token-exchange-flow
      console.log(publicToken, metadata);
    },
    [],
  );

  const retryPublicToken = async (publicToken: string | null) => {
    console.log(`public token: ${publicToken}`);
    const response = await axios.post(`${SERVER}/token_exchange`, {
      public_token: publicToken,
    });
    console.log("yo", response);
  };
  const {open, ready} = usePlaidLink({
    token,
    onSuccess,
  });

  return (
    <>
      <Button m={4} onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </Button>

      <Button title="Retry" onClick={() => retryPublicToken(publicToken)}>
        {" "}
        <RepeatIcon />{" "}
      </Button>
    </>
  );
};

export default Link;
