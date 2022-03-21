import { Button, Container, Title, Form, Input, Wrapper, Link } from "./styled"

const Login = () => {
  return (
    <Container>
      <Wrapper>
      <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username'></Input>
          <Input placeholder='password'></Input>
          <Button>LOGIN</Button>
          <Link>DON NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login