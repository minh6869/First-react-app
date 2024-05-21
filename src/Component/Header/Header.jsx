import {
  FaMobileScreen,
  FaShuffle,
  FaRegHeart,
  FaRegUser,
  FaChevronDown,
  FaMagnifyingGlass,
  FaCartShopping,
} from "react-icons/fa6";
import "./header.css";
import { useState } from "react";
import {
  en,
  us,
  fr,
  logo,
  banner1,
  banner2,
  banner3,
} from "../../assets/images/index";

function Header() {
  const [country, setCountry] = useState("United States");
  const [countryimg, setCOuntryimg] = useState(us);
  const [currency, setCurrency] = useState("USD");
  const [search, setSearch] = useState(false);
  const [visit1, setVisit1] = useState(false);
  const [visit2, setVisit2] = useState(false);
  const onHover1 = () => {
    setVisit1(true);
  };
  const onHover2 = () => {
    setVisit2(true);
  };
  const onLeave1 = () => {
    setVisit1(false);
  };
  const onLeave2 = () => {
    setVisit2(false);
  };
  const handleClick1 = () => {
    setVisit1(false);
  };
  const handleClick2 = () => {
    setVisit2(false);
  };

  return (
    <header>
      <div className="info">
        <div className="settings">
          <div className="dropdown lg-dropdown" id="country_selector">
            <div
              className="select"
              onClick={() =>
                document
                  .getElementById("country_menu")
                  .classList.toggle("hidden")
              }
            >
              <img src={countryimg} alt="" />
              <span className="selected">{country}</span>
              <FaChevronDown />
            </div>
            <div
              className="menu lg-menu hidden"
              onClick={() =>
                document
                  .getElementById("country_menu")
                  .classList.toggle("hidden")
              }
              id="country_menu"
            >
              <ul>
                <li
                  onClick={() => {
                    setCountry("United States");
                    setCOuntryimg(us);
                  }}
                >
                  <img src={us} alt="usa's flag" />
                  United States
                </li>
                <li
                  onClick={() => {
                    setCountry("English");
                    setCOuntryimg(en);
                  }}
                >
                  <img src={en} alt="uk's flag" />
                  English
                </li>
                <li
                  onClick={() => {
                    setCountry("France");
                    setCOuntryimg(fr);
                  }}
                >
                  <img src={fr} alt="french's flag" />
                  France
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown money-dropdown" id="currency_selector">
            <div
              className="select"
              onClick={() =>
                document.getElementById("money_menu").classList.toggle("hidden")
              }
            >
              <span className="selected">{currency}</span>
              <FaChevronDown />
            </div>
            <div
              className="menu hidden"
              id="money_menu"
              onClick={() =>
                document.getElementById("money_menu").classList.toggle("hidden")
              }
            >
              <ul>
                <li onClick={() => setCurrency("USD")}>USD</li>
                <li onClick={() => setCurrency("EUR")}>EUR</li>
                <li onClick={() => setCurrency("GBR")}>GBR</li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <FaMobileScreen /> 123-456-789
          </div>
        </div>
        <div className="userinfo">
          <a href="#">
            <FaShuffle /> Compare
          </a>
          <a href="#">
            <FaRegHeart /> Wishlist
          </a>
          <a href="#">
            <FaRegUser /> Login
          </a>
        </div>
      </div>
      <hr />
      <div className="navbar">
        <div>
          <a href="#">
            <img src={logo} alt="logo" className="logo" draggable="false" />
          </a>
        </div>
        <ul className="nav">
          <li>
            <a href="#">HOME</a>
          </li>
          <li onMouseEnter={onHover1} onMouseLeave={onLeave1}>
            <a href="#">
              PAGES <FaChevronDown />
            </a>
            {visit1 && (
              <div className="dropdown-menu pages-menu">
                <ul onClick={handleClick1}>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                  <li>
                    <a href="#">404 Error Page</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Terms And Condition</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            onMouseEnter={onHover2}
            onMouseLeave={onLeave2}
            id="products_dropdown"
          >
            <a href="#">
              PRODUCTS
              <FaChevronDown />
            </a>
            {visit2 && (
              <div className="dropdown-menu products-menu">
                <div className="products-nav">
                  <div>
                    <h4>WOMAN&apos;S</h4>
                    <ul onClick={handleClick2}>
                      <li>
                        <a href="#">Vestibulum Sed</a>
                      </li>
                      <li>
                        <a href="#">Donec Porttitor</a>
                      </li>
                      <li>
                        <a href="#">Donec Vitae Facilisis</a>
                      </li>
                      <li>
                        <a href="#">Curabitur Tempus</a>
                      </li>
                      <li>
                        <a href="#">Vivamus In Tortor</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4>MEN&apos;S</h4>
                    <ul onClick={handleClick2}>
                      <li>
                        <a href="#">Donec Vitae Ante Ante</a>
                      </li>
                      <li>
                        <a href="#">Etiam Ac Rutrum</a>
                      </li>
                      <li>
                        <a href="#">Quisque Condimentum</a>
                      </li>
                      <li>
                        <a href="#">Curabitur Laoreet</a>
                      </li>
                      <li>
                        <a href="#">Vivamus In Tortor</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4>KID&apos;S</h4>
                    <ul onClick={handleClick2}>
                      <li>
                        <a href="#">Donec Vitae Facilisis</a>
                      </li>
                      <li>
                        <a href="#">Quisque Condimentum</a>
                      </li>
                      <li>
                        <a href="#">Etiam Ac Rutrum</a>
                      </li>
                      <li>
                        <a href="#">Donec Vitae Ante Ante</a>
                      </li>
                      <li>
                        <a href="#">Donec Porttitor</a>
                      </li>
                    </ul>
                  </div>
                  <div id="trash">
                    <h4>ACCESSORIES</h4>
                    <ul onClick={handleClick2}>
                      <li>
                        <a href="#">Donec Vitae Facilisis</a>
                      </li>
                      <li>
                        <a href="#">Quisque Condimentum</a>
                      </li>
                      <li>
                        <a href="#">Etiam Ac Rutrum</a>
                      </li>
                      <li>
                        <a href="#">Donec Vitae Ante Ante</a>
                      </li>
                      <li>
                        <a href="#">Donec Porttitor</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="products-banner">
                  <div className="banner">
                    <img src={banner1} alt="banner1" draggable="false" />
                    <div className="banner-info">
                      <h6>10% Off</h6>
                      <h4>Wooden Chair</h4>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                  <div className="banner">
                    <img src={banner2} alt="banner2" draggable="false" />
                    <div className="banner-info">
                      <h6>15% Off</h6>
                      <h4>Wooden Chair</h4>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                  <div className="banner">
                    <img src={banner3} alt="banner3" draggable="false" />
                    <div className="banner-info">
                      <h6>23% Off</h6>
                      <h4>Wooden Chair</h4>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
        <div className="search-cart" id="search_bar">
          {search && <input type="text" className="search-bar" />}
          <span
            onClick={() => {
              setSearch(true);
              document.getElementById("search_bar").focus();
            }}
          >
            <FaMagnifyingGlass />
          </span>
          <span>
            <FaCartShopping />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
