'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const Nav = () => {
  useEffect(() => {
    window.addEventListener('scroll', windowScroll);
    return ()=> window.removeEventListener('scroll', windowScroll);
  }, []);

  const windowScroll = () => {
    const scroll = window.scrollY 
    console.log(scroll)
  };

  return (
    <nav>
      <div className="container">
        <div>
          <Link href="/">
            <Image width="200" height="70" src="/logo.png" alt="" />
          </Link>
        </div>
        <div>
          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="!#">About Us</Link>
              <ul>
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
              <Link href="!#">Products</Link>
              <ul>
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
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li className="getquote">
              <Link href="/contact">Get a free quote</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container"></div>
      <div className="humberger">
        <div>
          <Image src="/hamburger-icon.png" alt="" width="20" height="20" />
        </div>
        <div>Belshaw Cleaning Services</div>
      </div>
    </nav>
  );
};

export default Nav;
