import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    box-shadow: 0px 5px 10px 0px #aaa;
    width: 96%;
    background: #404eed;
    border-radius: 1em;
    float: left;
    color: #eee;
    opacity: 0.85;
    height: 50px;
    z-index: 100;
    display: flex;
    margin: 0 0 1em 1em;
    justify-content: flex-start;
`
export const LogoLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.3rem;
    white-space: nowrap;
    margin-left: 71px;

    &.active {
        color: #fff;
    }
    &:hover {
        color: #000;
    }
    @media screen and (max-width: 940px) {
        padding: 0px,0rem;
        margin-left: 71px;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem 0 0.5rem;
    margin-left: 0.5rem;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;

    &.active {
        color: #fff;
    }
    &:hover {
        color: #000;
    }
`
export const BarsMenu = styled.div`
    position: absolute;
    top: 10vh;
    height: 46vh;
    width: 22vw;
    background: #5d69f0;
    margin-left: 2vw;
    border-radius: 1em;
    display: none;
`
export const NavMenu = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: inherit;

    @media screen and (max-width: 940px) {
        display: none;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 5vw;

    @media screen and (max-width: 940px) {
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    background: #fff;
    color: #FFF;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: right;
    margin: 2;
    border-radius: 40px;
    font-size: 14px;
    padding: 10px 16px;
    white-space: nowrap;
    margin-left: auto;
    margin-right: -2vw;
    justify-content: end;

    &:hover {
        transition: all 0.2 ease-in-out;
        box-shadow: 0 8px 15px rgba(0,0,0,.2);
        color: #404eed;
    }
`

