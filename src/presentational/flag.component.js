import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img alt="country" className="country-logo" src={props.country.imageUrl}  />
    </div>
);

export default CountryFlag;