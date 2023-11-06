import React from 'react';
import { headerMenu } from '@data/menus';

const Header = () => {
  return (
    <nav className="container main-nav">
        {headerMenu && headerMenu.map((item, index) => {
            return (
                <a 
                    key={index}
                    href={item.uri}
                    className="main-nav__item"
                    target={item.external && '_blank'}
                >
                    {item.isIcon ? item.icon : item.name}
                </a>
            )
        })}
    </nav>
  )
}

export default Header
