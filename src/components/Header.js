import React from 'react'
import logo from '../assets/images/RBLogoTrans.png'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major">
            <span className="image fit">
              <img src={logo} alt={'logo'} />
            </span>
          </span>
          <h1>
            <strong>Research Blocks</strong>
            <br />
          </h1>
          <p>
            Accumsan feugiat mi commodo erat lorem ipsum, sed magna
            <br />
            lobortis feugiat sapien sed etiam volutpat accumsan.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
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
