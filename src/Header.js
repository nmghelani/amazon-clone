import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt=""
      />
      </Link>

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header__basketCount">
            {basket?.length}
            {/* subtotal to show the number of items and sum the total price of products in checkout */}
          </span>
        </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
