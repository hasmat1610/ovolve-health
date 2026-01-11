'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/assets/css/Header.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles['header-div']}>
        <div className={styles['header-container']}>
          <div className={styles['logo-div']}>
            <Link className={styles['logo_link']} href="/">
              <Image
                className={styles['logo']}
                src={logo}
                alt="Ovolve Health logo"
                width={158}
                height={40}
                priority
              />
            </Link>
          </div>

          <nav className={styles['nav-center-div']}>
            <div 
              className={`${styles['cd-shadow-layer']} ${isNavOpen ? styles['is-visible'] : ''}`}
              onClick={closeNav}
            ></div>

            <div className={styles['nav-m-bar']}>
              <button onClick={openNav} className={styles.opennav}>
                <i className={`menu-bars menu-icon icon-menu`}></i>
              </button>
            </div>

            <div 
              className={`${styles['nav-div']} ${isNavOpen ? styles.open : ''}`} 
              id="mySidenav"
            >
              <button className={styles.closebtn} onClick={closeNav}><i className='icon-cross'></i></button>

              <div className={styles['row-nav-div']}>
                <div className={styles['left-side']}>
                  <ul className={`nav ${styles['nav-list-inline']}`} id="nav-res">
                    <li><Link href="#" className={styles['nav-link']}>Features</Link></li>
                    <li><Link href="#" className={styles['nav-link']}>How It Works</Link></li>
                    <li><Link href="#" className={styles['nav-link']}>The Science</Link></li>
                    <li><Link href="#" className={styles['nav-link']}>FAQs</Link></li>
                  </ul>
                </div>

                <div className={styles['right-side']}>
                  <Link href="#" className="btn btn-outline-primary">Sign In</Link>
                  <Link href="#" className="btn btn-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
