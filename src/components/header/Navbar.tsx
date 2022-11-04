import React from 'react';
import logo from 'assets/images/logo.svg';
import * as styles from './header.module.css';

function Navbar() {
    return (
        <nav className={styles.navBar}>
            <section>
                <div className="pt-2">
                    <img src={logo} alt=""  />
                </div>
                <div className="hidden md:flex space-x-6 ">
                    <a href="#" className='hover:text-dark-grayish-blue'>Pricing</a>
                    <a href="#" className='hover:text-dark-grayish-blue'>Product</a>
                    <a href="#" className='hover:text-dark-grayish-blue'>About Us</a>
                    <a href="#" className='hover:text-dark-grayish-blue'>Careers</a>
                    <a href="#" className='hover:text-dark-grayish-blue'>Community</a>
                </div>
            </section>
        </nav>
    );
}

export default Navbar;
