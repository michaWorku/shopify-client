import { Circle, Container, Icon, Image, Info } from "./styled"
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link, useParams } from "react-router-dom";


const Product = ({item}) => {
  
  return (
    <Container>
      <Circle/>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartCheckoutOutlinedIcon/>
        </Icon>
        <Link to={`/product/{item._id}`}>
          <Icon>
            <SearchOutlinedIcon/>
          </Icon>
        </Link>
        <Icon>
            <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product