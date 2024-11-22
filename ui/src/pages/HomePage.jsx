import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container maxW={"xl"} centerContent>
        <Box
          display={"flex"}
          justifyContent={"center"}
          p={"3"}
          bg={"white"}
          w={"100%"}
          m={"40px 0 15px 0"}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Text
            fontSize={"4xl"}
            fontFamily={"Work Sans"}
            textTransform={"uppercase"}
          >
            Live-Talk
          </Text>
        </Box>
        <Box
          bg={"white"}
          w={"100%"}
          p={"4"}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mb={"1em"} justifyContent={"center"}>
              <Tab w={"30%"}>Login</Tab>
              <Tab w={"30%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
