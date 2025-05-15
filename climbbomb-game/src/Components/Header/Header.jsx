import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>Climb Bomb</div>
                <ul className={styles.navMenu}>

                    <li>
                        <NavLink to='/game'>
                            Game
                        </NavLink>
                    </li>

                    <li><NavLink to='/profile'>
                        Profile
                    </NavLink></li>
                    <li><NavLink to='/register'>
                        Register
                    </NavLink></li>
                    <li><NavLink to='/login'>
                        Login
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
