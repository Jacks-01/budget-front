"use client"
import React from "react"
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react"
import {MoonIcon, SunIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"
import LoginButton from "../Auth0/Login"
import LogoutButton from "../Auth0/Logout"

export default function Nav() {
  const {colorMode, toggleColorMode} = useColorMode()
  const {isOpen, onOpen, onClose} = useDisclosure()
  const { user, isAuthenticated } = useAuth0()
  
  
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button>
                <Link to="/">Home</Link>
              </Button>
              <Button>
                <Link to="/transactions">Transactions</Link>
              </Button>
              <Button>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button>
                <Link to="/budget">Budget</Link>
              </Button>
              {/* <Button>
                <Link to="/link">Link</Link>
              </Button> */}

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}>
                  <Avatar
                    size={"sm"}
                    src={
                      isAuthenticated
                        ? user?.picture
                        : "https://api.dicebear.com/7.x/fun-emoji/svg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        isAuthenticated
                          ? user?.picture
                          : "https://api.dicebear.com/7.x/fun-emoji/svg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{isAuthenticated ? user?.name : "Username"}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Link to="/account">Account Settings</Link>
                  </MenuItem>
                  <MenuItem>
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
