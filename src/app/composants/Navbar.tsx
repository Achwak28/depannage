import React from "react";
import "./style.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navigation">
      <div className="top__navbar">
        <Link href="mailto:contact@depannage-auto.com">
          contact@depannage-auto.com
        </Link>
      </div>
      <div className="bottom__navbar">
        <div className="logo">
          <h1>Transport.dz</h1>
        </div>
        <ul className="liste__navigation">
          <li>
            <Link href="/">Devenir transporteur</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">à propos </Link>
          </li>
          <li>
            <Link href="/">Contactez nous </Link>
          </li>
        </ul>
        <Link href="/" className="btn__connexion">
          <button>Se connecter</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
