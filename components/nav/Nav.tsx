'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [getScroll, setScroll] = useState('hide');
  const [showmenu, setShowmenu] = useState('hide');

  useEffect(() => {
    window.addEventListener('scroll', windowScroll);
    return () => window.removeEventListener('scroll', windowScroll);
  }, []);

  const windowScroll = () => {
    const scroll = Math.floor(window.scrollY);
    if (scroll > 40) {
      setScroll('show');
    } else {
      setScroll('hide');
    }
  };

  return (
    <nav className={`navbar ${getScroll}`}>

        <div
    
          className={`container menubox ${showmenu}`}
        >
          <div>
            <Link href="/">
              <Image
                onClick={() => setShowmenu('hide')}
                width="200"
                height="70"
                src="/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <ul>
              <li className="active">
                <Link onClick={() => setShowmenu('hide')} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#">About Us</Link>
                <ul onClick={() => setShowmenu('hide')}>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>

                  <li>
                    <Link href="/whoweare">Who we are</Link>
                  </li>
                  <li>
                    <Link href="/ourvision">Our Vision</Link>
                  </li>
                  <li>
                    <Link href="/ourmission">Our Mission</Link>
                  </li>
                  <li>
                    <Link href="/ourcorevalues">Our Core Values</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/#">Products</Link>
                <ul onClick={() => setShowmenu('hide')}>
                  <li>
                    <Link href="/detergents">Detergents</Link>
                  </li>
                  <li>
                    <Link href="/disinfectants">Disinfectants</Link>
                  </li>
                  <li>
                    <Link href="/degreasers">Degreasers</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link onClick={() => setShowmenu('hide')} href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={() => setShowmenu('hide')} href="/contact">
                  Contact
                </Link>
              </li>
              <li className="getquote">
                <Link onClick={() => setShowmenu('hide')} href="/contact">
                  Get a free quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          onClick={() => setShowmenu('hide')}
          className={`backshadow ${showmenu}`}
        ></div>
        <div className="humberger">
          <div>
            <Image
              src="/hamburger-icon.png"
              alt=""
              width="20"
              height="20"
              onClick={() => setShowmenu('show')}
            />
          </div>
          <div>Belshaw Cleaning Services</div>
        </div>

    </nav>
  );
};

export default Nav;
