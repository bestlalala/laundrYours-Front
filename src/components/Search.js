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
                    width={300}
                    value={search}
                    onChange={onChange}
                    placeholder="세탁하려는 옷의 소재를 입력하세요"
                />
                <SearchBtn value={search} />
            </form>
        </div>
    )
}

export default Search;