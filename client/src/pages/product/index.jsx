import { Announcement, Footer, Navbar, NewsLetter } from "../../components"
import { Container, Desc, ImageContainer, Image, InfoContainer, Price, Title, Wrapper, FilterContainer, Filter, FilterTitle, FilterColor, FilterSizeOption, FilterSize, AddContainer, AmountContainer, Button, Amount } from "./styled"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import {publicRequest} from '../../requestMethod'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/cart/cartSlice";

const Product = () => {
  const params = useParams()
  const id = params.id;

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch()

  // fetch product
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${id}`)
        setProduct(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    getProduct()
  }, [id])
  
  const handleQuantity=(type)=>{
    if(type === 'dec') {
      quantity > 1 && setQuantity((prev)=> prev-1)
    }else{
      setQuantity((prev)=> prev+1)
    }
  }

  const updateCart=()=> {
    dispatch(addProduct({...product, quantity, color, size}))
  }

  return (
    <Container>
      <Navbar/>
      <Announcement/>
        <Wrapper>
          <ImageContainer>
            <Image src={product.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
              <Price>$ {product.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  {
                    product.color?.map((color)=>(
                      <FilterColor color={color} key={color} onClick={()=> setColor(color)}/>
                    ))
                  }
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize onChange={(e)=>setSize(e.target.value)}>
                    {
                      product.size?.map((size)=>(
                        <FilterSizeOption key={size}>{size}</FilterSizeOption>
                      ))
                    }
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <RemoveIcon onClick={()=> handleQuantity('dec')}/>
                  <Amount>{quantity}</Amount>
                  <AddIcon onClick={()=> handleQuantity('inc')}/>
                </AmountContainer>
                <Button onClick={updateCart}>ADD TO CART</Button>
              </AddContainer>
          </InfoContainer>
        </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product