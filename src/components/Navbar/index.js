import React from 'react'
import { LogoLink, Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, BarsMenu } from './NavbarElements'
const Navbar = () => {
  return (
      <>
        <Nav>
        <Bars input type = "checkbox"/> 
            <LogoLink to='/'>
                <h2>Kenneth Worth</h2>
            </LogoLink>   
            <NavMenu>
                <NavLink to='/cryptotracker' activeStyle>
                    Crypto Tracker
                </NavLink>
                <NavLink to='/pokemem' activeStyle>
                    Pokemon Memory Game
                </NavLink>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/contact' activeStyle>
                    Contact Me
                </NavLink>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavMenu>
            <BarsMenu></BarsMenu>
        </Nav>
      </>
  )
}

export default Navbar