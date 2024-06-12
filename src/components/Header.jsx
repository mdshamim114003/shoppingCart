import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';<NavLink to="/" className='text-white my-auto text-2xl font-bold'>Clothing Store</NavLink>

const Header = ({ basket }) => {
    return (
        <div className='bg-slate-800 min-h-auto p-8 px-12 flex justify-between align-center mb-8'>
            <NavLink to="/" className='text-white my-auto text-2xl font-bold'>Clothing Store</NavLink>
            <NavLink to="/cart" className='relative'>
                <FontAwesomeIcon className='bg-white' icon={faCartShopping} size='2x' border />
                <div className='bg-red-600 rounded text-white absolute px-1 -top-2 -right-2'>{basket.map(item => item.item).reduce((x,y) => x+y, 0)}</div>
            </NavLink>
            
      </div>
    );
};

export default Header;