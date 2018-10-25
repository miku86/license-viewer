import React, { Component } from 'react';

class LicenseDetails extends Component {
  render() {
    const license = this.props.license;
    return (
      <div className="result">
        {license.title ? (
          <h1 className="result__title">{license.title}</h1>
        ) : (
          ''
        )}
        <div className="result__details">
          <li>
            {license.description || (
              <h1 className="select-license">Select a License</h1>
            )}
          </li>
        </div>
      </div>
    );
  }
}

export default LicenseDetails;
