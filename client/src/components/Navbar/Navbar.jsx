import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.scss'
import '../../App.css'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

   const item = useSelector((state)=> state.cart);
   const [open,setOpen] = useState(false);

  return (
    <div className="navbar">
        <div className="wrapper">
        <div className="left">
            <div className="item">
             <img src="/img/en.png" alt="" />
            </div>
             <div className="item">
                <span> USA <KeyboardArrowDownIcon/></span>
             </div>
             <div className="item">
                <Link className='link' to='/product/1'>Women</Link>
             </div>
             <div className="item">
                <Link className='link' to='/product/1'>Men</Link>
              </div>
             <div className="item">
                <Link className='link' to='/products/1'>Children</Link>
             </div>
             <div className="item">
                <Link className='link' to='/products/1'>Products</Link>
             </div>
             <div className="item">
                <Link className='link' to='/venia/penelope-peasant-blouse'>VeniaProduct</Link>
             </div>
        </div>
        <div className="center">
               <Link className='link' to='/'>AEMStore</Link>

        </div>
        <div className="right">
        <div className="item">
               <Link className='link' to='/'>HomePage</Link>
        </div>
        <div className="item">
               <Link className='link' to='/'>About Us</Link>
        </div>
        <div className="item">
               <Link className='link' to='/'>Stores</Link>

        </div>
        <div className="icons">
                <SearchIcon/>
                <PersonIcon/>
                <FavoriteOutlinedIcon/>
                <div className="cartIcon" onClick={() => setOpen(!open)}>
                    <ShoppingCartOutlinedIcon />
                    <span>{item.cartTotalQuantity}</span>
                </div>
        </div>
        </div>
        </div>
        
        {open && <Cart/>}
         
    </div>
  )
}

export default Navbar