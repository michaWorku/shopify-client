import { Button, Container, Desc, Input, InputContainer, Title } from "./styled"
import SendIcon from '@mui/icons-material/Send';

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
          <SendIcon/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter