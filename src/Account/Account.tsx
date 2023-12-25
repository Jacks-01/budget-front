import {Box, Heading} from "@chakra-ui/layout";
import Link from "../Link/Link";
import React from "react";

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  return (
    <>
      <Box p={4}>
        <Heading>Settings</Heading>
        <Link />
      </Box>
    </>
  );
};

export default Account;
