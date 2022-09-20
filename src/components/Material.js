import React from "react";
import { Link } from "react-router-dom";

function Material({ id, name, image, material_info, washing_method, washing_tag, caution, storage_method }) {
    return (
        <div>
            <h3>
                <Link to={`/material/${name}`}>
                    {name}
                </Link>
            </h3>
            <p>{material_info}</p>
            <img src={image} alt={name}/>
            <h4>세탁 방법</h4>
            <p>{washing_method}</p>
            <h4>보관 방법</h4>
            <p>{storage_method}</p>
        </div>
    );
}

export default Material;