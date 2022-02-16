import React, { useEffect, useState } from 'react';
import { Navbar, Products } from './Components';
import { useQuery } from '@apollo/client';
import { LOAD_CATEGORIES } from './GraphQL/Queries'
import GlobalStyles from './Components/Styles/Global';
import { BrowserRouter as Router} from "react-router-dom";

const App = () => {
    const { error, loading, data } = useQuery(LOAD_CATEGORIES);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showMoney, setShowMoney] = useState(0);
    const openModal = () => {
        setShowModal(prev => !prev);
    }

    const handelAddToCart = (product, attr ) => {
        const exist = cart.find(x => x.id === product.id);
        if (exist) {
            if (product.attributes.length === 1) {
                setCart(cart.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1, specification: attr } : x))
            } else {
                const arr = [];
                arr.push(attr)
                setCart(cart.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1, specification: arr } : x))
            }
            
        } else {
            
            if (product.attributes.length === 1) {
                setCart([...cart, { ...product, qty: 1, specification: attr }])
            } else {
                const arr = [];
                arr.push(attr)
                setCart([...cart, { ...product, qty: 1, specification: arr}])
            }
        }
    }
    const onRemove = (product) => {
        const exist = cart.find(x => x.id === product.id);
        if (exist.qty === 1) {
            setCart(cart.filter(x => x.id !== product.id))
        } else {
            setCart(cart.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }
    useEffect(() => {
        if (data) {
            setProducts(data.categories);
        }
        
    }, [data]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        console.log( cart)

    return (
        <>
            <GlobalStyles />
            <Router>
                <Navbar setShowMoney={setShowMoney} products={products} openModal={openModal} count={cart.length}  />
                <Products  showMoney={showMoney} addToCart={handelAddToCart} products={products} onRemove={onRemove} showModal={showModal} cart={cart} />
            </Router>
        </>
    )
}
export default App
