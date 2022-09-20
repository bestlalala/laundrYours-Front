import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
    return (
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/tips">꿀팁</Link>
            </li>
        </ul>
        <Outlet />
        </>
    )

}

export default Menubar;