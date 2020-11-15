import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFeature } from '../store/actions'


const AddedFeature = props => {

  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick={() => dispatch(deleteFeature(props.feature))}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
