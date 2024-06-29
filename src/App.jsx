import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import { useEffect, useState } from 'react';
import RandomNumber from './components/RandomNumber';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';


function App() {
  let shopItemsData = [
    {
      id: "jhhjh",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "./../src/assets/images/img-1.jpg",
    },
    {
      id: "ghfhgg",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "./../src/assets/images/img-2.jpg",
    },
    {
      id: "gfhgfhfgh",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "./../src/assets/images/img-3.jpg",
    },
    {
      id: "ghututyuh",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "./../src/assets/images/img-4.jpg",
    },
  ];
  // shopItemsData = shopItemsData.map(item => ({...item, id: RandomNumber()}))
  const [basket, setBasket] = useState(() => {
    const oldBasketData = localStorage.getItem('data')
    return oldBasketData ? JSON.parse(oldBasketData) : [] ;
  })

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket))
  },[basket])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home basket={basket} setBasket={setBasket} shopItemsData={shopItemsData} />} />
        <Route path='/cart' element={<Cart basket={basket} setBasket={setBasket} shopItemsData={shopItemsData} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
