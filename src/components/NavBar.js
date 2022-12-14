import React from 'react';
import {NavLink} from 'react-router-dom';



export const NavBar = () =>{
    return(
        <nav>  
        <ul> 
        <li >
        <NavLink to ="/"> index-link </NavLink>
        </li>
        <li>        <NavLink to ="/home"> home-link </NavLink>  </li>
        </ul>
        </nav>

    )
}
