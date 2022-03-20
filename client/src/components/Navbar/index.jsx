import { Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper } from "./styled"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input />
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
            <MenuItem>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon/>
              </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar