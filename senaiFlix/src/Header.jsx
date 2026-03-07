import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #000;
  padding: 1rem 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  z-index: 1000;

  border-bottom: 1px solid #333;

  .logo {
    color: red;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 2px;
  }

  nav {
    display: flex;
    gap: 25px;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.1rem;
      transition: color 0.3s;

      &:hover {
        color: #e50914;
      }
    }
  }

  .hamburger-menu {
    display: none;
    cursor: pointer;
    font-size: 2rem;
    color: white;
  }

  .menu-mobile {
    display: ${props => (props.open ? 'flex' : 'none')};

    flex-direction: column;
    position: absolute;

    top: 70px;
    right: 20px;

    background: #111;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #444;

    gap: 15px;

    a {
      color: white;
      text-decoration: none;
    }
  }

  @media (max-width: 1023px) {
    nav {
      display: none;
    }

    .hamburger-menu {
      display: block;
    }
  }
`

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <HeaderContainer open={menuOpen}>

            <Link to='/' className='logo'>
                SENAIFLIX
            </Link>

            <div
                className='hamburger-menu'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span>&#9776;</span>
            </div>

            <nav>
                <Link to='/'>Inicio</Link>
                <Link to='/?tipo=movie'>Filmes</Link>
                <Link to='/?tipo=tv'>Series</Link>
                <Link to='/favorites'>Favoritos</Link>
            </nav>

            <div className='menu-mobile'>

                <Link to='/' onClick={() => setMenuOpen(false)}>
                    Inicio
                </Link>

                <Link to='/?tipo=movie' onClick={() => setMenuOpen(false)}>
                    Filmes
                </Link>

                <Link to='/?tipo=tv' onClick={() => setMenuOpen(false)}>
                    Series
                </Link>

            </div>

        </HeaderContainer>
    )
}

export default Header