import { Agreement, Button, Container, Title, Form, Input, Wrapper } from "./styled"

const Register = () => {
  return (
    <Container>
      <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='name'></Input>
          <Input placeholder='last name'></Input>
          <Input placeholder='username'></Input>
          <Input placeholder='email'></Input>
          <Input placeholder='password'></Input>
          <Input placeholder='confirm password'></Input>
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