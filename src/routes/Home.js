import React, { useState } from "react";
import Loader from "../Loader";
import Search from "../components/Search";
import MaterialList from "../components/MaterialList";

function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <div>
            {/* <Header /> */}
            <Search/>
            <MaterialList/>
        </div>
    )
}

export default Home;