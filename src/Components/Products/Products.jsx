import React from 'react';
import All from './Category/All';
import Clothes  from './Category/Clothes';
import Tech  from './Category/Tech';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Popup from '../Popup/Popup';
import Cart from '../Cart/Cart';
import Details from './Detialis/Details';
const Products = ({ products , addToCart,showModal,cart,onRemove,showMoney,onAttr,attribute}) => {
const product = products.map(product => product);

  return (
    <main>
      {
        (products.length !== 0) && (
          <>
            <Routes>
              <Route exact path="/" element={<All addToCart={addToCart} showMoney={showMoney} products={product[0]} />} />
              <Route exact path="/clothes" element={<Clothes addToCart={addToCart }  showMoney={showMoney} products={product[1]} />}/>
              <Route exact path="/tech" element={<Tech addToCart={addToCart} showMoney={showMoney} products={product[2]} />} />
              <Route exact path="/cart" element={<Cart showMoney={showMoney} addToCart={addToCart} onRemove={onRemove} cart={cart} />} /> 
              {
                product[0].products.map((product,index) => (
                  <Route key={index} exact path={`/${product.id}`} element={<Details attribute={attribute} showMoney={showMoney} onAttr={onAttr} addToCart={addToCart} product={product} />} />))
                }
            </Routes>
          </>
        )
      }
          <Popup showMoney={showMoney} showModal={ showModal} addToCart={addToCart} onRemove={onRemove} cart={cart}/>
    </main>        
  )
}

export default Products
