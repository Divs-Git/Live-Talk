import React, { useState } from "react";
import {
  FormControl,
  InputGroup,
  InputRightElement,
  FormLabel,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {};
  const handleGuestSubmit = () => {};

  return (
    <React.Fragment>
      <VStack spacing={"5px"}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            focusBorderColor="lightgreen"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowHidePassword}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="green"
          w={"100%"}
          style={{ marginTop: "15px" }}
          onClick={handleSubmit}
        >
          Login
        </Button>

        <Button
          colorScheme="red"
          w={"100%"}
          style={{ marginTop: "15px" }}
          onClick={handleGuestSubmit}
        >
          Login as Guest
        </Button>
      </VStack>
    </React.Fragment>
  );
};

export default Login;
