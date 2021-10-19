import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { BrowserRouter, Link } from "react-router-dom";
import "./Navigationbrandpa.css";
import logo from "./gold bars1.png"


const Navigationbrandpa = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <header style ={{    top: "-86px", }}>
      <div className="container" style ={{top:"0px"}}>
        <div className="logo">
        <a className="navbar-brand" href="index.html">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        </div>
        <nav className="menu-main-menu-new-container">
          <ul id="menu-main-menu-new" className="menu">
            <li
              id="menu-item-419"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-419"
            >
              <a href="find-jobs-employment-agency/index.html">Domain</a>
              <ul className="sub-menu">
                <li
                  id="menu-item-37"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37"
                >
                  <Link>Domain Name Search</Link>
                </li>
                <li
                  id="menu-item-424"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-424"
                >
                  <Link>Domain Transfer</Link>
                </li>
                <li
                  id="menu-item-420"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-420"
                >
                  <Link>Bulk Domain Search</Link>
                </li>
                <li
                  id="menu-item-420"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-420"
                >
                  <Link>Whois Lookup</Link>
                </li>
                <li
                  id="menu-item-420"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-420"
                >
                  <Link>PersonalDNS</Link>
                </li>
              </ul>
            </li>
            <li
              id="menu-item-419"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-419"
            >
              <a href="find-jobs-employment-agency/index.html">Test Menu</a>
              <ul className="sub-menu">
                <li
                  id="menu-item-37"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37"
                >
                  <Link>Domain Name Search</Link>
                </li>
                <li
                  id="menu-item-424"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-424"
                >
                  <Link>Domain Transfer</Link>
                </li>
                <li
                  id="menu-item-420"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-420"
                >
                  <Link>Bulk Domain Search</Link>
                </li>
                <li
                  id="menu-item-420"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-420"
                >
                  <Link>Whois Lookup</Link>
                </li>
                <li
                  id="menu-item-420"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-420"
                >
                  <Link>PersonalDNS</Link>
                </li>
              </ul>
            </li>

            <li
              id="menu-item-425"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-425"
            >
              <a href="about-us-piper-companies/index.html">About Us</a>
              <ul className="sub-menu">
                <li
                  id="menu-item-429"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-429"
                >
                  <a href="about-us-piper-companies/index.html">About</a>
                </li>
                <li
                  id="menu-item-426"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-426"
                >
                  <a href="about-us-piper-companies/join-the-piper-team/index.html">
                    Working at Piper
                  </a>
                </li>
                <li
                  id="menu-item-428"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-428"
                >
                  <a href="our-locations-piper-companies/index.html">
                    Our Locations
                  </a>
                </li>
                <li
                  id="menu-item-427"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-427"
                >
                  <a href="contact-us-piper-companies/index.html">Contact Us</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* <a
          className="demo-button"
          href="https://careers.pipercompanies.com/"
          target="_blank"
        >
          Search Jobs
        </a>
        <a className="demo-button white" href="contact-us-piper-companies.html">
          Contact Us
        </a> */}
        <div className="mobile-nav">
          <div className="navicon">
            <i className="fas fa-bars" />
          </div>
          <div className="m-nav-container">
            <div className="mobile-close">
              <img
                width={65}
                height={66}
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2065%2066'%3E%3C/svg%3E"
                data-lazy-src="wp-content/themes/piper/img/close.png"
              />
              <noscript>
                &lt;img width="65" height="66"
                src="wp-content/themes/piper/img/close.png" /&gt;
              </noscript>
            </div>
            <div className="logo">
              <a href="#" target="_blank">
                <span>
                  <object data="wp-content/themes/piper/img/logo-white.svg">
                    <img
                      width={100}
                      height={30}
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%2030'%3E%3C/svg%3E"
                      alt="Piper"
                      data-lazy-src="wp-content/themes/piper/img/logo-white.png"
                    />
                    <noscript>
                      &lt;img width="100" height="30"
                      src="wp-content/themes/piper/img/logo-white.png"
                      alt="Piper" /&gt;
                    </noscript>
                  </object>
                </span>
              </a>
            </div>
            <ul id="menu-mobile-menu" className="menu">
              <li
                id="menu-item-341"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-26 current_page_item menu-item-341"
              >
                <a href="index.html" aria-current="page">
                  Home
                </a>
              </li>
              <li
                id="menu-item-342"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-342"
              >
                <a href="find-jobs-employment-agency/index.html">Job Seekers</a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-687"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-687"
                  >
                    <a href="https://careers.pipercompanies.com/">
                      Search Careers
                    </a>
                  </li>
                  <li
                    id="menu-item-830"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-830"
                  >
                    <a href="find-jobs-employment-agency/index.html">
                      Working with Piper
                    </a>
                  </li>
                  <li
                    id="menu-item-357"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-357"
                  >
                    <a href="find-jobs-employment-agency/employment-staffing-agency/index.html">
                      The Process
                    </a>
                  </li>
                </ul>
              </li>

              <li
                id="menu-item-344"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-344"
              >
                <a href="about-us-piper-companies/index.html">About Us</a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-690"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-690"
                  >
                    <a href="about-us-piper-companies/index.html">About</a>
                  </li>
                  <li
                    id="menu-item-346"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-346"
                  >
                    <a href="about-us-piper-companies/join-the-piper-team/index.html">
                      Working at Piper
                    </a>
                  </li>
                  <li
                    id="menu-item-347"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-347"
                  >
                    <a href="our-locations-piper-companies/index.html">
                      Our Locations
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigationbrandpa;
