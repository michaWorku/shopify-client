import { Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper } from "./styled"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state)=> state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <SearchIcon style={{color:"gray",fontSize: '16px'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Shopify
          </Logo>
        </Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <Link to='/cart'>
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon/>
                </Badge>
              </MenuItem>
            </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar