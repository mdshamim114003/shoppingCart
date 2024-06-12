import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';<NavLink to="/" className='text-white my-auto text-2xl font-bold'>Clothing Store</NavLink>

const Cart = ({basket, setBasket, shopItemsData}) => {
    const handleIncrement = (id) => {
        const search = basket.find((item) => item.id === id)
        if(search === undefined) {
          setBasket((prevBasket) => [
            ...prevBasket,
            {
              id: id,
              item: 1
            }
          ])
        }
        else {
          setBasket((prevBasket) => 
            prevBasket.map((basketItem) =>
              basketItem.id === id ? { ...basketItem, item: basketItem.item + 1 } : basketItem
            )
          )
        }
        // localStorage.setItem('data', JSON.stringify(basket))
    }
    const handleDecrement = (id) => {
        const search = basket.find((item) => item.id === id)
        if(search?.item === 0) return
        else {
          setBasket((prevBasket) => 
            prevBasket.map((basketItem) =>
              basketItem.id === id ? { ...basketItem, item: basketItem.item - 1 } : basketItem
            )
          )
        }
    
        // basket.filter(x => x.item !== 0)
        setBasket((prevBasket) => prevBasket.filter(x => x.item !== 0))
    }
    const clearItem = (id) => {
      // const search = basket.filter(item => item.id !== id)
      setBasket((prevBasket) => prevBasket.filter(item => item.id !== id))
    }
    const clearCart = () => {
      setBasket([])
    }
    return (
        <>
            <Header basket={basket}/>
            {(() => {
              if(basket.length !== 0) {
                return (
                  <div className="flex flex-col items-center mb-10">
                <h2 className="font-bold text-2xl">Total Bill : ${
                    basket.map(item => {
                        const search = shopItemsData.find(x => x.id === item.id)
                        return search.price * item.item
                    }).reduce((x, y) => x + y, 0)
                }</h2>
                <div className="mt-2 flex gap-2">
                    <button className="bg-green-800 px-1.5 py-0.5 rounded text-white">Checkout</button>
                    <button onClick={clearCart} className="bg-red-500 px-1 rounded text-white">Clear Cart</button>
                </div>
                {basket.map(item => {
                  const search = shopItemsData.find(x => x.id === item.id)
                  return (
                  <div key={item.id} className="flex border-2 border-black rounded mt-5">
                    <img width={100} src={search.img} alt={search.name} />
                    {/* <img src="./src/assets/images/img-2.jpg" alt="fgdfg" /> */}
                    <div className="flex flex-col gap-2.5 p-2.5">
                        <div className="w-48 flex items-center justify-between">
                            <div className="flex gap-2 font-bold">
                                <h2>{search.name}</h2>
                                <h2>${search.price}</h2>
                            </div>
                            <button onClick={()=> clearItem(item.id)}><FontAwesomeIcon icon={faX} /></button>
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={()=> handleDecrement(item.id)}><FontAwesomeIcon icon={faMinus} /></button>
                            <p>{item.item}</p>
                            <button onClick={()=> handleIncrement(item.id)}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                        <h2 className="font-bold text-xl">${search.price * item.item}</h2>
                    </div>
                  </div>
                )})}
            </div>
                )
              } else {
                return (
                  <div className="text-center">
                    <h2 className="font-bold mb-2 text-2xl">Cart is Empty</h2>
                    {/* <button className="px-1.5 rounded bg-slate-700">Back To Home</button> */}
                    <NavLink to="/" className="text-white px-2 py-0.5 rounded bg-slate-700">Back To Home</NavLink>
                  </div>
                )
              }
            })()}
        </>
    );
};

export default Cart;