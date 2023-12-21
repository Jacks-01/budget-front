import { Heading } from "@chakra-ui/layout";
import Link from "../Link/Link";
import React from "react";

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  return (
    <>
      <Heading>Settings</Heading>
      <Link />
    </>
  );
};

export default Account;
