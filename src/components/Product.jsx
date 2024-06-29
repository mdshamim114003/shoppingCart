import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({basket, setBasket, shopItemsData}) => {
  // const basket = JSON.parse(localStorage.getItem('data')) || []
  
  const handleDecrement = (id) => {
    const search = basket.find((item) => item.id === id)
    if(search?.item === 0) return
    setBasket((prevBasket) => 
      prevBasket.map((basketItem) =>
        basketItem.id === id ? { ...basketItem, item: basketItem.item - 1 } : basketItem
      )
    )

    // basket.filter(x => x.item !== 0)
    // setBasket((prevBasket) => prevBasket.filter(x => x.item !== 0))
  }

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
      return;
    }

    // setBasket((prevBasket) => 
    //   prevBasket.map((basketItem) =>
    //     basketItem.id === id ? { ...basketItem, item: basketItem.item + 1 } : basketItem
    //   )
    // )

    setBasket(prevBasket => {
      const changedItemIndex = prevBasket.findIndex(item => item.id === id)
      prevBasket[changedItemIndex].item += 1
    })


    // localStorage.setItem('data', JSON.stringify(basket))
  }
  function renderBasketCount(id){
    const search = basket.find((item) => item.id === id)
    return search?.item || 0
  }
  return (
    <>
      {shopItemsData.map((item, index) => (
        <div key={item.id} className='w-56 border-2 border-black mb-5 rounded'>
        <img className='w-56' src={item.img} alt="Product Image" />
        <div className='flex flex-col gap-2 px-2 py-3'>
          <h1 className='font-bold text-xl'>{item.name}</h1>
          <p>{item.desc}</p>
          <div className='flex justify-between'>
            <h2 className='font-bold text-xl'>$ {item.price}</h2>
            <div className='flex justify-center items-center gap-2'>
              <button onClick={()=> handleDecrement(item.id)}><FontAwesomeIcon icon={faMinus}/></button>
              <p>{renderBasketCount(item.id)}</p>
              <button onClick={()=> handleIncrement(index)}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
};

export default Product;