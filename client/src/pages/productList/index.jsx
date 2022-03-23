import { useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Announcement, Products, NewsLetter, Footer } from "../../components/"
import {Container, Title, FilterContainer, Filter, FilterText, Select, Option} from './styled'

const ProductList = () => {
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")  

  const params = useParams()
  const cat = params.category;
  
  const handleSelect = (e) => {
    setFilters({...filters, [e.target.name]: e.target.value})
  }

  return (
    <Container>
      <Navbar />
      <Announcement/>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleSelect}>
            <Option disabled>Color</Option>
            <Option >white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name='size' onChange={handleSelect}>
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
        <Select onChange={(e)=> setSort(e.target.value)}>
          <Option value='newest'>Newest</Option>
          <Option value='asc'>Price (asc)</Option>
          <Option value='dsc'>Price (dsc)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList