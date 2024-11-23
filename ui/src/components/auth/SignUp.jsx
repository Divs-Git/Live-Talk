import React, { useState } from 'react'
import {
  FormControl,
  InputGroup,
  InputRightElement,
  FormLabel,
  Input,
  VStack,
  Button,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [image, setImage] = useState()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const toast = useToast()
  const history = useHistory()

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleShowHideConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const postDetails = (pics) => {
    setLoading(true)
    if (!pics) {
      toast({
        title: 'Please select an Image!!!',
        status: 'warning',
        duration: 6000,
        isClosable: true,
        position: 'bottom',
      })
      return
    }

    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData()
      data.append('file', pics)
      data.append('upload_preset', 'live-talk')
      data.append('cloud_name', 'divyansh258')
      fetch('https://api.cloudinary.com/v1_1/divyansh258/image/upload', {
        method: 'post',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url.toString())
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    } else {
      toast({
        title: 'Please select an Image!!!',
        status: 'warning',
        duration: 6000,
        isClosable: true,
        position: 'bottom',
      })
      setLoading(false)
    }
  }
  const handleSubmit = async () => {
    setLoading(true)
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: 'Please enter all fields',
        status: 'warning',
        duration: 6000,
        isClosable: true,
        position: 'bottom',
      })
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      toast({
        title: 'Password do not match!!!',
        status: 'warning',
        duration: 6000,
        isClosable: true,
        position: 'bottom',
      })
      setLoading(false)
      return
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      const { data } = await axios.post(
        '/api/user',
        { name, email, password, image },
        config
      )
      toast({
        title: 'You have been registered successfully',
        status: 'success',
        duration: 6000,
        isClosable: true,
        position: 'bottom',
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
      setLoading(false)
      history.push('/chats')
    } catch (error) {
      toast({
        title: 'Error occured',
        description: error.response.data.message,
        status: 'warning',
        duration: 6000,
        isClosable: true,
        position: 'bottom',
      })
      setLoading(false)
    }
  }

  return (
    <React.Fragment>
      <VStack spacing={'5px'}>
        <FormControl id='first-name' isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            focusBorderColor='lightgreen'
            placeholder='Enter your name'
            onChange={(e) => {
              setName(e.target.value)
            }}
          ></Input>
        </FormControl>

        <FormControl className='email' isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            focusBorderColor='lightgreen'
            placeholder='Enter your email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          ></Input>
        </FormControl>

        <FormControl className='password' isRequired>
          <FormLabel>Password</FormLabel>

          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleShowHidePassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id='confirm-password' isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
              <Button
                h='1.75rem'
                size='sm'
                onClick={handleShowHideConfirmPassword}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id='profile-pic'>
          <FormLabel>Upload a picture</FormLabel>
          <Input
            border={0}
            type='file'
            p={1.5}
            accept='image/*'
            onChange={(e) => {
              postDetails(e.target.files[0])
            }}
          />
        </FormControl>

        <Button
          colorScheme='green'
          w={'100%'}
          style={{ marginTop: '15px' }}
          onClick={handleSubmit}
          isLoading={loading}
        >
          Sign Up
        </Button>
      </VStack>
    </React.Fragment>
  )
}

export default SignUp
