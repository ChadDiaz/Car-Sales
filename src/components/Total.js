import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.CSR.additionalPrice,
    car: state.CSR.car,
    additionalFeatures: state.CSR.additionalFeatures,
  }
}

export default connect(mapStateToProps, {})(Total);
