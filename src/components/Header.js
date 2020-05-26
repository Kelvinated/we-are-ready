import React, { useState } from "react"
import { Link } from 'gatsby'
import links from "../constants/links"
import styled from "styled-components"

const NavBar = styled.nav`
  padding: 0 1.875rem;
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: var(--background);
`

const NavButton = styled.button`
  position: relative;
  color: #fff;
  padding: 12px 0 17px 0;
  order: 1;
  border: none;
  background-color: transparent;
  font-size: var(--menuItem);
  font-weight: 900;
  letter-spacing: -1px;
  z-index: 10;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 10px;
    background-color: var(--primary);
  }

  @media (min-width: 768px) {
    display: none !important;
  }
`

const NavLogo = styled.div`
  font-size: 0.875rem;
  font-weight: 900;
  /* width: 100%; */
  flex-shrink: 0;
  letter-spacing: -0.5px;
  /* padding-top: 1px; */
  padding: 0.8em 0 0.4em 0;
  z-index: 2;
  border-bottom: 1px solid var(--primary);

  @media (min-width: 1200px) {
    font-size: 1rem;
    padding: -1px 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    @media (hover: hover) {
      &:hover {
        color: var(--primary);
      }
    }
  }
`

const NavCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`
const NavLinks = styled.div`
  background-color: #1a1a1b00;
  display: flex;
  align-content: center;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding: 0 1.875rem;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  max-width: 500px;
  transform: translateX(-100%);
  transition: opacity 0.1s ease-in, transform 0.1s ease-in,
    visibility var(--transition) ease-in;

  @media (min-width: 768px) {
    /* position: relative; */
    top: auto;
    left: auto;
    transform: translate(0);
    width: auto;
    height: auto;
    visibility: visible;
    opacity: 1;
    padding: 0;
    padding-right: 1em;
  }

  &.show-nav {
    background-color: var(--background);
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 8px;
      background-color: var(--primary);
    }

    @media (min-width: 768px) {
      padding-top: 10px;
      padding-bottom: 18px;
      margin-right: 15px;
      margin-bottom: 0;

      &::after {
        bottom: 17px;
      }
    }

    @media (min-width: 1200px) {
      padding-top: 15px;
      padding-bottom: 20px;
      margin-right: 25px;

      &::after {
        bottom: 17px;
      }
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;

    &:focus, &:active {
      color: var(--primary);
    }
  }

  @media (hover: hover) {
    a:hover, a:active {
      color: var(--primary);
    }
  }
`
const Spacer = styled.div`
  height: 1em;

  @media (min-width: 768px) {
    height: 1em;
  }

  @media (min-width: 1200px) {
    height: 1em;
  }
`

const Logo = styled.img`
width: 13em;

`


const Header = () => {
    const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <header>
        <NavBar>
        <NavCenter>
            <NavLogo>
                <Link to="/" class="main-header-logo">
                    <Logo src="https://res.cloudinary.com/weareready/image/upload/v1587995259/logo-wrr.png" alt="We Are Ready Logo" />
                </Link>
            </NavLogo>
            <NavButton type="button" onClick={toggleNav}>
                Menu
            </NavButton>
            <NavLinks
            className={
              isOpen ? `${"navbar-links"} ${"show-nav"}` : `${"navbar-links"}`
            }
          >
            <ul>
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link  duration={1} cover bg="var(--background)" to={item.path}>
                      {item.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </NavLinks>
          </NavCenter>
        </NavBar>
        <Spacer />
    </header>
  )
}

export default Header