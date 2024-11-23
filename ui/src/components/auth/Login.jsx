import React, { useEffect, useState } from 'react'
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
import { useHistory } from 'react-router-dom/'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const toast = useToast()
  const history = useHistory()

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async () => {
    setLoading(true)
    if (!email || !password) {
      toast({
        title: 'Enter all input fields!!!',
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
        '/api/user/login',
        { email, password },
        config
      )

      toast({
        title: 'Login Successfully!!!',
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
        <FormControl className='email' isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
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
              value={password}
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleShowHidePassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme='green'
          w={'100%'}
          style={{ marginTop: '15px' }}
          onClick={handleSubmit}
          isLoading={loading}
        >
          Login
        </Button>

        <Button
          colorScheme='red'
          w={'100%'}
          style={{ marginTop: '15px' }}
          onClick={() => {
            setEmail('guest@google.com')
            setPassword('123456')
          }}
        >
          Get the Guest Creditial
        </Button>
      </VStack>
    </React.Fragment>
  )
}

export default Login
