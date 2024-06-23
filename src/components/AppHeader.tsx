import HeaderDropdown from "./HeaderDropdown";
import "./AppHeader.css";
import {Link} from "react-router-dom";
import {siteImagePrefix} from "../utils";
import {CategoryProps} from "../types.ts";
import {useState} from "react";

export default function AppHeader(props: CategoryProps) {

    // Transitions between search button and input field
    const [searchClicked, setSearchClicked] = useState(false);

    return (
        <header className="container">
            <section className="bookstore-logo-and-title">
                <Link className="logo-and-text" to="/">
                    <img
                        src={`${siteImagePrefix}/Books%20and%20Brews%20Logo.png`}
                        alt="H. L. Lyons Books & Brews Logo"
                    />
                </Link>
                <Link className="logo-and-text" to="/">
                    <div className="text-logo-container">
                        <h1 className="text-logo-owner">H. L. Lyons</h1>
                        <h1 className="text-logo-name">Books & Brews</h1>
                    </div>
                </Link>
            </section>
            <section className="menu-search-cart-login">
                <HeaderDropdown categories={props.categories}/>
                {searchClicked ? (
                    <input
                        type="text"
                        placeholder="Search"
                        className="search"
                        onBlur={() => setSearchClicked(false)}
                    />
                ) : (
                    <button className="button" onClick={() => setSearchClicked(true)}><i
                        className="fa-solid fa-search"></i> SEARCH</button>
                )}

                <button className="button"><i className="fa-solid fa-cart-shopping"></i> (1) CART</button>
                <button className="button"><i className="fa-solid fa-right-to-bracket"></i> SIGN IN</button>
            </section>
        </header>
    );
}
