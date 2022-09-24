import React, { useState } from "react";
import Loader from "../Loader";
import Search from "../components/Search";

function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <div>
            {/* <Header /> */}
            <img src="img/logo.png" alt="logo"
                style={{width: '300px'} }/>
            <Search/>
        </div>
    )
}

export default Home;