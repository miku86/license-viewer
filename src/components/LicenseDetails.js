import React, { Component } from 'react';

class LicenseDetails extends Component {
  render() {
    return (
      <ul className="result">
        <li>{this.props.license.title}</li>
        <li>{this.props.license.description}</li>
      </ul>
    );
  }
}

export default LicenseDetails;
