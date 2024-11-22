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

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [image, setImage] = useState();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowHideConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const postDetails = () => {};
  const handleSubmit = () => {};

  return (
    <React.Fragment>
      <VStack spacing={"5px"}>
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            focusBorderColor="lightgreen"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Input>
        </FormControl>

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
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowHidePassword}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleShowHideConfirmPassword}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="profile-pic" isRequired>
          <FormLabel>Upload a picture</FormLabel>
          <Input
            border={0}
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => {
              postDetails(e.target.files[0]);
            }}
          />
        </FormControl>

        <Button
          colorScheme="green"
          w={"100%"}
          style={{ marginTop: "15px" }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </VStack>
    </React.Fragment>
  );
};

export default SignUp;
