import React from 'react'
import logo from '../assets/images/RBLogoTrans.png'
import styled from 'styled-components'
/* eslint-disable */

const Logo = styled.img`
  max-width: 275px;
  margin-bottom: -65px;
`

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major">
            <span className="image fit">
              <Logo src={logo} alt={'logo'} />
            </span>
          </span>

          <h2>
            <strong>Revolutionizing the Research Ecosystem</strong>
          </h2>

          <ul className="actions">
            <li>
              <a href="#" className="button scrolly">
                Whitepaper
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
