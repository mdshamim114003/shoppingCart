import Header from './../components/Header'
import Product from './../components/Product'
import { useEffect, useState } from 'react';
import RandomNumber from './../components/RandomNumber';


function Home({basket, setBasket, shopItemsData}) {
  
  return (
    <>
      <Header basket={basket} />
      <div className='container flex justify-center flex-wrap gap-7 mx-auto w-screen'>
        <Product basket={basket} setBasket={setBasket} shopItemsData={shopItemsData}/>
        {/* <img src="./src/assets/images/img-2.jpg" alt="fgdfg" /> */}
      </div>
    </>
  )
}

export default Home
