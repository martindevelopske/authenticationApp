import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from '../styles/Styled.button'
import { StyledNav } from '../styles/Styled.Nav'

function Navbar() {
  return (
    <StyledNav>
        authentication
        <div>
            <span>
                <Link to="/login">
                <StyledButton>login</StyledButton>
                </Link>
                <Link to="/register">
                <StyledButton>signup</StyledButton>
                </Link>
                
            </span>
        </div>
    </StyledNav>
  )
}

export default Navbar