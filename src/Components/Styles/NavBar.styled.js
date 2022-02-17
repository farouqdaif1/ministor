import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
    display: flex ;
    justify-content:space-between;
    height: 80px;
    align-items:center;
    padding: 0 117px;
    position:fixed;
    z-index:10;
    background: #ffff;
    width:100%;
    top:0;
`
export const List = styled.ul`
    display: flex ;
    list-style:none;
    justify-content:space-between;
    align-items:center;
    width:243px;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: center;
    color:black;
`
export const StyledLink = styled(Link)`
    font-family: 'Raleway', sans-serif; 
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      color: #5ECE7B;
      cursor: pointer;
    }
`;
export const ShoppingCart = styled.div`
position:relative;
cursor: pointer;

`
export const Number = styled.span`
position:absolute;
background: #1D1F22;
color: white;
height: 20px;
width: 20px;
border-radius: 60px;
display: flex;
justify-content:center;
align-items:center;
bottom:60%;
left:50%;
`
export const Change = styled.div`
display:flex;
`
export const Smoney = styled.select`
display:flex;
margin-right:10px;
width:35px;
font-family: 'Raleway', sans-serif; 
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
border: none;
  cursor: pointer;
  outline:none;

`