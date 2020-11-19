import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";
import { deleteFeature } from "../store/actions";

const AddedFeatures = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map((item) => (
            <AddedFeature
              key={item.id}
              feature={item}
              deleteFeature={props.deleteFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ CSR }) => {
  return {
    car: CSR.car,
  };
};

export default connect(mapStateToProps, { deleteFeature })(AddedFeatures);
