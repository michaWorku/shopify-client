import { Announcement, Footer, Navbar, NewsLetter } from "../../components"
import { Container, Desc, ImageContainer, Image, InfoContainer, Price, Title, Wrapper, FilterContainer, Filter, FilterTitle, FilterColor, FilterSizeOption, FilterSize, AddContainer, AmountContainer, Button, Amount } from "./styled"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
        <Wrapper>
          <ImageContainer>
            <Image src="https://i.ibb.co/DG69bQ4/2.png" />
          </ImageContainer>
          <InfoContainer>
            <Title>AUTUMN COLLECTION</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos harum atque sequi molestias debitis eos mollitia 
              dolorem nesciunt aut quod dolore vel, ullam voluptate. 
              Totam voluptas distinctio error corrupti sunt?</Desc>
              <Price>$ 20</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color='black'/>
                  <FilterColor color='darkblue'/>
                  <FilterColor color='gray'/>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <RemoveIcon/>
                  <Amount>1</Amount>
                  <AddIcon/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
          </InfoContainer>
        </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product