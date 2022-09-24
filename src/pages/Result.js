import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Material from "../components/Material";
import Search from "../components/Search";
import dummy from "../dummy/material-api.json";

function Result() {
    const [loading, setLoading] = useState(true);

    const { param } = this.props.match;

    const materialResult = dummy.materialList.filter((m) => (
        m.name.toLowerCase().includes(this.state.userInput)
    ));
    console.log(param);

    return (
        <div>
            <Search/>
            <h1>'{}' 검색결과</h1>
            <div>
                {materialResult.map((material) => (
                    <Material
                        key={material.id}
                        id={material.id}
                        image={material.image}
                        material_info={material.material_info}
                        washing_method={material.washing_method}
                        washing_tag={material.washing_tag}
                        caution={material.caution}
                        storage_method={material.storage_method}
                    />
                ))}
            </div>
        </div>
    )
                
}
export default Result;