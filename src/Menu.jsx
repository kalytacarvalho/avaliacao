import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";


const Menu = () => {
    return (
        <div className="menu">
            <div className='title'>Asteróides.com</div>
            <div>
                <Link to="/" className='menuItem'>Home</Link>
                <Link to="/SobreMim" className='menuItem'>Sobre Mim</Link>
            </div>


        </div>
    );
};

export default Menu;