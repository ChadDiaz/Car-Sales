import React from 'react';
import {connect} from 'react-redux'

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log("MSTP in HEADER.JS file", state)
  return {
    additionalPrice: state.CSR.additionalPrice,
    car: state.CSR.car,
    additionalFeatures: state.CSR.additionalFeatures,
  }
}

export default connect(mapStateToProps, {})(Header);
