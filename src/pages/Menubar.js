import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Menubar.module.css";

const Menubar = () => {
    return (
        <>
        <div className={styles.container}>
            <span className={styles.item}>
                <Link to="/" >Home</Link>
            </span>
            <span className={styles.item}>
                <Link to="/tips">꿀팁공유</Link>
            </span>
            <span className={styles.item}>
                <Link to="/laundry">주변 세탁소</Link>
            </span>
        </div>
        <Outlet />
        </>
    )

}

export default Menubar;