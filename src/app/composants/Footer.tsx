import React from "react";
import "./style.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer">
      <div className="banner__telechargement">
        <h1>Téléchargez notre application disponible sur Android et iOS.</h1>
        <Link href="/">
          <button>Download</button>
        </Link>
      </div>
      <div className="footer__content">
        <div className="col-4">
          <div className="logo__white">
            <Link href="/">Transport.dz</Link>
          </div>

          <p>
            Our goal is to provide the best customer service and to answer all
            of your questions in a timely manner.
          </p>
        </div>
        <div className="col-4">
          <h4>Notre service </h4>
          <div className="liste__flex__footer">
            <ul className="liste__navigation__footer">
              <li>
                <Link href="/">provide the best </Link>
              </li>
              <li>
                <Link href="/">provide the best </Link>
              </li>
              <li>
                <Link href="/">provide the best </Link>
              </li>
              <li>
                <Link href="/">provide the best </Link>
              </li>
            </ul>
            <ul className="liste__navigation__footer">
              <li>
                <Link href="/">provide the best </Link>
              </li>
              <li>
                <Link href="/">provide the best </Link>
              </li>
              <li>
                <Link href="/">provide the best </Link>
              </li>
              <li>
                <Link href="/">provide the best </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <h4>A propos de nous </h4>
          <p>
            Our goal is to provide the best customer service and to answer all
            of your questions in a timely manner.
          </p>
        </div>
        <div className="col-4">
          <h4>Newslatter</h4>
          <div className="newslatter">
            <input type="text" placeholder="Entrer votre adresse" />
            <Link href="/">
              <button>Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
