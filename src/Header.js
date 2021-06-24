import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {useStatevalue} from './StateProvider'
import {auth} from './firebase'

function Header(){

    const [{cart,loggedinuser},dispatch] = useStatevalue();
    console.log("my cart",cart)
    const logoutUser = ()=>{
        if(loggedinuser){
            auth.signOut();
        }
    }

    return(
        <nav className="header">
            <img className="header-logo" alt="logo" src="https://e7.pngegg.com/pngimages/930/269/png-clipart-service-mark-symbol-registered-trademark-symbol-service-miscellaneous-angle.png"/>
            <div className="header-search">
                <input type="text" className="header-searchInput"/>
                <SearchIcon className="header-searchIcon"/>
            </div>
            <div className="header-nav">
            <Link to={!loggedinuser && "/login"} className="header-link">
            <div onClick={logoutUser} className="header-option">
                <span className="header-optionOne">Accounts {loggedinuser?.email}</span>
                <span className="header-optionTwo">Sign Out / Sign In</span>
            </div>
            </Link>
        
            <Link to="/" className="header-link">
            <div className="header-option">
                <span className="header-optionOne">Returns</span>
                <span className="header-optionTwo">& Orders</span>
            </div>
            </Link>

            
            </div>
            <Link to="/checkout" className="header-link">
                <div className="header-basket">
                    <ShoppingCartIcon/>
                    <span className="header-optionTwo header-product">{cart?.length}</span>
                </div>
            </Link>
        </nav>
    )
    
}

export default Header