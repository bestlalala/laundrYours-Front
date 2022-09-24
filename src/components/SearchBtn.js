import React from "react";
import Button from "./common/Button";

function SearchBtn({ value }) {
    const setSearch = (value) => {
        window.location.href = `search/${value}`
    }
    
    return (
        <Button onClick={setSearch}>검색</Button>
    );
}

export default SearchBtn;