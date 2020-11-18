import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { addFeature } from "../store/actions";

const AdditionalFeatures = (props) => {
  console.log("props from the additional Features comp. parent to AF", props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeature={addFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // additionalPrice: state.CSR.additionalPrice,
    car: state.CSR.car,
    additionalFeatures: state.CSR.additionalFeatures,
  };
};

export default connect(mapStateToProps, {})(AdditionalFeatures);
