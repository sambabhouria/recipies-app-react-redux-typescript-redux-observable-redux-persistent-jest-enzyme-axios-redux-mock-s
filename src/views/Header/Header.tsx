import React from "react";

import SearchForm from "../../features/SearchForm/SearchForm";

import Logo from "../../assets/img/logo.png";
import smababhouria from'../../assets/img/avatar.png';

import "./Header.scss";

const Header:React.FC = () => {
  return (
    <>
      <header className="d-flex justify-content-center align-items-start">
        <img src={Logo} alt="Recipe-App" className="logo" />
        <div className="title  d-none d-lg-block">Samba recipes App</div>
        <SearchForm />

                <a className="text-success ml-3 mt-2"
                  href="https://github.com/sambabhouria"
                  title="Star on GitHub"
                  style={{marginRight: '20px'}}
                >
                  <i className="fab fa-github" />
                </a>
                <img src={smababhouria} alt="github-profile" className="logo" />
      </header>
    </>
  );
};

export { Header };

export default Header;
