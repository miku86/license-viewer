import React from 'react';

const LicenseDetailsBox = (props) => {
  return (
    <div className="result__box">
      <h4 className="result__box__title">{props.name}</h4>
      <ul className={`result__${props.name}`}>
        {props.data.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default LicenseDetailsBox;
