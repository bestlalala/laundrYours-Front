import React, { useState } from "react";
import dummy from "../dummy/material-api.json";
import Material from "./Material";

const MaterialList = () => {
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState([]);

  return (
    <div>
      {dummy.materialList.map((material) => (
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
  );
};

export default MaterialList;
