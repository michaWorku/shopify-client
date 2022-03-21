import { Navbar, Announcement, Products, NewsLetter, Footer } from "../../components/"
import {Container, Title, FilterContainer, Filter, FilterText, Select, Option} from './styled'

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color">
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name='size'>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
        <Select>
          <Option>Newest</Option>
          <Option>Price (asc)</Option>
          <Option>Price (dsc)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList