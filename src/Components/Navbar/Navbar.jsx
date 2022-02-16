import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { List, NavBar, StyledLink,ShoppingCart ,Number,Change,Smoney} from '../Styles/NavBar.styled';

const Navbar = ({ count, openModal, products, setShowMoney}) => {
  
  const changeFunc = () => {
    const select  = document.getElementById("currency");
    if (select  !== null) {
      const value = select.options[select.selectedIndex].value;
      setShowMoney(parseInt(value, 10));
    }

  }
  return (
      <NavBar>
        <List >
        <li>
          <StyledLink to="/" >All</StyledLink>
        </li>
        <li>
          <StyledLink to="/clothes">Clothes</StyledLink>
        </li>
        <li>
          <StyledLink to="/tech">Tech</StyledLink>
        </li>
      </List>
      <Change>{
        (products.length > 0) && (
          <Smoney name="currency" id="currency"  onChange={changeFunc }>
            <option value="0" >{products[0].products[0].prices[0].currency.symbol}</option>
            <option value="1">{products[0].products[0].prices[1].currency.symbol}</option>
            <option value="2" >{products[0].products[0].prices[2].currency.symbol}</option>
            <option value="3">{products[0].products[0].prices[3].currency.symbol}</option>
            <option value="4">{products[0].products[0].prices[4].currency.symbol}</option>
          </Smoney>)}
      <ShoppingCart onClick={() => { openModal() }}>
        <FiShoppingCart />
        {
      (count>0)&&(<Number>{count}</Number>)
        }
        </ShoppingCart>
      </Change>

      </NavBar>
)
}
export default Navbar
