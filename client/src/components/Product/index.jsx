import { Circle, Container, Icon, Image, Info } from "./styled"
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartCheckoutOutlinedIcon/>
        </Icon>
        <Icon>
           <SearchOutlinedIcon/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product