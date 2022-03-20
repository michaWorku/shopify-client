import { popularProducts } from "../../data"
import Product from "../Product"
import { Container } from "./styled"

const Products = () => {
  return (
    <Container>
      {
        popularProducts.map((item)=>(
          <Product item={item} key={item.id}/>
        ))
      }
    </Container>
  )
}

export default Products