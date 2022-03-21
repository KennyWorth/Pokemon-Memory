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
                <NavLink to='/gravytrain' activeStyle>
                    Gravy Train
                </NavLink>
                <NavLink to='/signup' activeStyle>
                    Sign Up
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