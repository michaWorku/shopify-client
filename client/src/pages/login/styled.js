import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
        linear-gradient(
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2)
        ),
        url("https://media.istockphoto.com/photos/online-shopping-concept-laptop-and-shopping-cart-on-blue-background-picture-id1301022916?b=1&k=20&m=1301022916&s=170667a&w=0&h=SZwrubcWrhzWgomr41shkT15TzZyjta9ubUoFPbmEiM=")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    margin-left: 40px;
    background-color: white;
    ${mobile({width: '75%', marginLeft: "0px"})}
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    ${mobile({margin: "5px 0px"})}
`
export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

export const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`