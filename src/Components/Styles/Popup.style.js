import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
display:flex;
position:fixed;
z-index:9;
top:80px;
left:0;
width:100%;
height:100vh;
background-color:rgba(0,0,0,0.2);
justify-content:flex-end;
`
export const PopupStyle = styled.div`
display:flex;
flex-direction:column;
background-color:#fff;
margin-right: 90px;
max-height: 540px;
width: 325px;
justify-content:center;
align-items:center;
`
export const Item = styled.div`
display:flex;
flex-wrap: nowrap;
justify-content:space-between;
height: 137px;
width: 293px;
`
export const ImageStyle = styled.div`
display:flex;
flex-wrap: nowrap;
justify-content:center;
align-items:center;
`
export const InfoStyle= styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:flex-start;
`
export const Pra= styled.p`
font-family: 'Raleway', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 26px;
letter-spacing: 0px;
text-align: left;
`
export const Money= styled.p`
font-family: 'Raleway', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: right;
`
export const PLus= styled.div`
margin-right:10px;
height: 24px;
width: 24px;
border: 1px solid #1D1F22;
display:flex;
justify-content:center;
align-items:center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 26px;
text-align: right;
cursor: pointer;

`
export const PusX= styled.div`
margin-right:10px;
height: 100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
`
export const ScrollContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
align-content:flex-end;
 width: 100%;
 max-height: 540px;
 overflow-y: auto;
 position: relative;
&::-webkit-scrollbar {
  width: 5px;
  border: 1px solid black;
}
/* Track */
&::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
/* Handle */
&::-webkit-scrollbar-thumb {
  background: #888; 
}
/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
cursor: pointer;

`
export const CartLink = styled(Link)`
    font-family: 'Raleway', sans-serif; 
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration:none;
    color: #1D1F22;
  
`;
export const ButtonLink = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 43px;
    width: 140px;
    padding: 16px, 32px;
    border: 1px solid #1D1F22;
    cursor: pointer;

`;
export const ButtonLink1 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 43px;
    width: 140px;
    padding: 16px, 32px, 16px, 32px;
    font-family: 'Raleway', sans-serif; 
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    background: #5ECE7B;
    color:#ffff;
`;

export const Buttons = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:60px;
`; 
export const Total = styled.div`
margin-top:42px;
height: 28px;
width: 289px;
display: flex;
justify-content:space-between;
font-family: 'Raleway', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
`; 

export const Title = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin-left:16px ;
    height:60px;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    text-align: right;
`; 

export const Bold = styled.div`
font-family: 'Raleway', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 26px;
text-align: right;
`; 
export const Attr = styled.div`
height: 24px;
padding:10px;
border: 1px solid #1D1F22;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
display:flex;
justify-content:center;
align-items:center;
margin-top:12px;
&:hover{
    opacity: 0.2;
    color:black;
}

`