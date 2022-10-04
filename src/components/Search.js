import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";

function Search() {
    const [search, setSearch] = useState("");
    const onChange = (event) => {
        setSearch(event.target.value);
    };

    const onClick = (event) => {
        console.log(search);
        if (search === "") {
            return;
        }
        setSearch("");
    };

    return (
        <div>
            <form>
                <input 
                    type="text" 
                    value={search}
                    onChange={onChange}
                    placeholder="세탁하려는 옷의 소재를 입력하세요"
                    style={
                        {width:"300px", height: "25px", fontSize: "12pt"}
                    }
                />
                <Link to={`/searchResult/${search}`}>
                    <Button onClick={onClick}>검색</Button>
                </Link>
            </form>
        </div>
    )
}

export default Search;