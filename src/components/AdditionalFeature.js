import React, { useState } from "react";

const AdditionalFeature = (props) => {
  console.log("Props from Additional Features components", props)
  const [feature, setFeature] = useState({
    name: props.feature.name,
    price: props.feature.price,
    id: props.feature.id,
  });
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          props.addFeature(feature);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
