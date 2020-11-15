import React from "react";
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { addFeature } from '../store/actions';
const AdditionalFeature = (props) => {

  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => dispatch(addFeature(props.feature))}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
