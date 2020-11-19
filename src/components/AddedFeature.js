import React from 'react';
import { connect } from 'react-redux'
// import { useDispatch } from 'react-redux';
import { deleteFeature } from '../store/actions'


const AddedFeature = props => {
  console.log("props from added feature comp", props)
  // const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick={() => props.deleteFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { deleteFeature })(AddedFeature);
