import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <div className={styles.wrapper}>
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles.searchWrapper}>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      </div>
      <Button className={styles.nav_link}>Give Feedback</Button>
    </nav>
    </div>
  );
}

export default Navbar;