import styled from "styled-components";
export const Photo = styled.div`
    display:flex;
    justify-content:space-evenly;
    width:60%;
`
export const Bar = styled.div`
 display:flex;
 flex-direction:column ;
`
export const DetailsStyle = styled.div`
 display:flex;
 justify-content:space-evenly;
 align-items:center;
`

export const Image = styled.div`
    display:flex;
`
export const Shop = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height: 513px;
    width: 292px;
`
export const Title = styled.p`
font-family: 'Raleway', sans-serif; 
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
`
export const SubTitle = styled.p`
font-family: 'Raleway', sans-serif; 
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
`
export const Size = styled.p`
margin-bottom:10px;
font-family: 'Roboto' Condensed;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
`
export const Price = styled.p`
font-family: 'Raleway', sans-serif; 
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;

`
export const Buttons = styled.div`
display: flex;
justify-content:space-between;
`
export const Box = styled.button`
height: 45px;
width: 63px;
outline:none;
border: 1px solid #A6A6A6
font-family: 'Source Sans Pro';
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: 0.05em;
text-align: center;
background:#ffff;
    &:hover{
        background:black;
        color:white;
        cursor: pointer;
    }
`
export const Add = styled.button`
height: 52px;
width: 292px;
padding: 16px, 32px, 16px, 32px;
background: #5ECE7B;
font-family: 'Raleway', sans-serif; 
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
border:none;
outline:none;
cursor: pointer;
`
export const Description = styled.div`
font-family: 'Roboto';
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
width: 292px;


`