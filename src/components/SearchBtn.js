import React from "react";

function SearchBtn({ value }) {
    const setSearch = (value) => {
        window.location.href = `search/${value}`
    }
    
    return (
        <button onClick={setSearch}>검색</button>
    );
}

export default SearchBtn;