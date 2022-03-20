import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Cart, Home, Login, Product, ProductList, Register, Success } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' >
          <Route index element={<Home/>}></Route>
          <Route path='products/:category' element={<ProductList />}/>
          <Route path='product/:id' element={<Product />}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='success' element={<Success/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
    </Router>
  )
}




export default App