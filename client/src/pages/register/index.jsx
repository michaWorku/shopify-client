import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { Spinner } from "../../components"
import { register, reset } from "../../features/auth/authSlice"
import { Agreement, Button, Container, Title, Form, Input, Wrapper } from "./styled"

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { username, email, password, confirmPassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        username,
        email,
        password,
        confirmPassword
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container>
      <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={onSubmit}>
          <Input placeholder='Enter your name' ></Input>
          <Input placeholder='last name'></Input>
          <Input
              id='username'
              name='username'
              value={username}
              placeholder='Enter your name'
              onChange={onChange}>  
          </Input>
          <Input 
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}>
          </Input>
          <Input 
            type='password'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={onChange}>
          </Input>
          <Input 
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              placeholder='Confirm password'
              onChange={onChange}>
          </Input>
          <Agreement>
            By creating an account, I consent to the processing of My personal
            data in accordance with <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register