import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { addNewFeature } from "../store/actions";

const AdditionalFeatures = (props) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addNewFeature={props.addNewFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ CSR }) => {
  return {
    additionalFeatures: CSR.additionalFeatures,
  };
};

export default connect(mapStateToProps, { addNewFeature })(AdditionalFeatures);
