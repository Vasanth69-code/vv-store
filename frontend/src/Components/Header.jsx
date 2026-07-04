import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const {cardItem} = useSelector((state) => state.card);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/"className="btn btn-ghost text-xl">VV Store</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/cart">cart<span>
              {cardItem.length >0 ?  cardItem.length : 0}
              
              </span></Link></li>
            <li>
              <details>
                <summary>profile</summary>
                
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>log out</a></li>
                  <li><a>settings</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Header
