import { useState } from "react";
import SearchBtn from "./SearchBtn";

function Search() {
    const [search, setSearch] = useState("");
    const onChange = (event) => {
        setSearch(event.target.value);
    };
    const onSubmit = (event) => {
        if (search === "") {
            return;
        }
        setSearch("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    value={search}
                    onChange={onChange}
                    placeholder="세탁하려는 옷의 소재를 입력하세요"
                    style={
                        {width:"300px", height: "20px", fontSize: "12pt"}
                    }
                />
                <SearchBtn value={search} />
            </form>
        </div>
    )
}

export default Search;