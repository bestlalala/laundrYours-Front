import React, { useState } from "react";
import Loader from "../Loader";
import Search from "../components/Search";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <div className={styles.container}>
            {/* <Header /> */}
            <div className={styles.item}>
                <img src="img/logo.png" alt="logo"
                    style={{width: '300px'} }/>
                <Search/>
            </div>
        </div>
    )
}

export default Home;