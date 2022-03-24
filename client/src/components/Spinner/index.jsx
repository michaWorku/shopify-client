import { Container, LoadingSpinner, LoadingSpinnerContainer } from './styled'

const Spinner = () => {
  return (
    <Container>
        <LoadingSpinnerContainer>
            <LoadingSpinner/>
        </LoadingSpinnerContainer>
    </Container>
  )
}

export default Spinner