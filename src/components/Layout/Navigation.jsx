import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: none;  
  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    font-weight: 200;
    color: ${props => props.theme.brand};         
  }  
  .nav-link:hover {
    border-color: ${props => props.theme.brand};     
  }
`

class Navigation extends React.Component {

  render() {
    return (
      <NavContainer>
        <section>
          <Link className='nav-link' to='/' > HOME </Link>
          <Link className='nav-link' to='/lesson-one' > DOCS </Link>
          <Link className='nav-link' to='/about' > ABOUT </Link>
        </section>
        <UserLinks />
      </NavContainer>
    )
  }
}

export default Navigation