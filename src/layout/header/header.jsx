import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <Link className="link" to='/'>HOME</Link>
            <Link className="link" to='/about'>ABOUT</Link>
            <Link className="link" to='/users'>USERS</Link>
            <Link className="link" to='/contact'>CONTACT</Link>
        </header>
    );
}