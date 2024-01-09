import {Box, Heading} from "@chakra-ui/layout";
import Link from "../Link/Link";
import React from "react";
import { Divider } from "@chakra-ui/react";

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  return (
    <>
      <Box p={4}>
        <Heading m={6}>Settings</Heading>
        <Divider/>
        <Link />
      </Box>
    </>
  );
};

export default Account;
