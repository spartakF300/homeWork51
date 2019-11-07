import React from 'react'

const Header = () => (
    <header className="header">
        <div className="container">

            <nav className="main-nav">
                <a className="logo" href=""><img className="logo-img"
                                                 src="https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300"
                                                 alt="logo"/></a>
                <ul className="list">
                    <li><a className="link" href="#">about as</a></li>
                    <li><a className="link" href="#">our client</a></li>
                    <li><a className="link" href="#">home</a></li>
                    <li><a className="link" href="#">setting</a></li>
                </ul>
            </nav>
        </div>
    </header>
);
export default Header