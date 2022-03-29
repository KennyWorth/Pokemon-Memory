import React from 'react'
import { LogoLink, Nav, NavLink, NavMenu, BarsMenu } from './NavbarElements'
const Navbar = () => {
  return (
      <>
        <Nav>
            <LogoLink to='/'>
                <h2>Kenneth Worth</h2>
            </LogoLink>   
            <NavMenu>
                <NavLink to='/pokemem' activestyle="true">
                    Pokemon Memory Game
                </NavLink>
                <NavLink to='/cryptotracker' activestyle="true">
                    Crypto Tracker
                </NavLink>
            </NavMenu>
            <BarsMenu></BarsMenu>
        </Nav>
      </>
  )
}

export default Navbar