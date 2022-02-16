import styled from 'styled-components';
export const CartContainer = styled.div`
display:flex;
justify-content:center;

`
export const CartStyle = styled.div`
margin-left:100px;
margin-right:100px;
width:100%;

`
export const Line = styled.div`
width: 100%;
border-bottom: 1px  #E5E5E5 solid;
`
export const CHeader = styled.div`
font-family: 'Raleway', sans-serif;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
margin-bottom:59px ;
`
export const Brand = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
margin-bottom:16px ;

`
export const Box = styled.div`
width: 45px;
height: 45px;
font-weight: 700;
display:flex;
justify-content:center;
align-items:center;
border: 1px solid #1D1F22;
`
export const Photo = styled.div`
height: 185px;
width: 198px;
display:flex;
justify-content:center;
align-items:center;
font-weight: 700;
`
export const Control = styled.div`
height: 100%;
display:flex;
flex-direction: column;
justify-content:space-evenly;
align-items:center;
margin-right:12px ;
`
export const ItemStyle = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const PName = styled.div`
font-family: 'Raleway', sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
margin-bottom:26px ;
`
export const Price = styled.div`
font-family: 'Raleway', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
`
export const Info = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
`
export const Attr = styled.div`
height: 45px;
width: 63px;
border: 1px solid #1D1F22;
display:flex;
justify-content:center;
align-items:center;
margin-top:12px;
&:hover{
    background: #1D1F22;
    color:white
}

`