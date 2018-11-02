import React, { Component } from 'react';

class LicenseDetails extends Component {
  render() {
    const license = this.props.license;
    return license && license.permissions ? (
      <div className="result">
        <h1 className="result__title">{license.title}</h1>
        <div className="result__details">
          <div className="result__desc">{license.description}</div>
          <ul className="result__permissions">
            <h4>Permissions</h4>
            {license.permissions.map((perm) => (
              <li>{perm}</li>
            ))}
          </ul>
          <ul className="result__conditions">
            <h4>Conditions</h4>
            {license.conditions.map((cond) => (
              <li>{cond}</li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      ''
    );
  }
}

export default LicenseDetails;
