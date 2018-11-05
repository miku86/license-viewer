import React, { Component } from 'react';
import LicenseDetailsBox from './LicenseDetailsBox';

class LicenseDetails extends Component {
  removeLinks = (text) => text.replace(/(<a href=".+?">|<\/a>)/g, '');

  render() {
    const license = this.props.license;
    return license && license.permissions ? (
      <div className="result">
        <h1 className="result__title">{license.title}</h1>
        <div className="result__details">
          <div className="result__desc">
            {this.removeLinks(license.description)}
          </div>
          <div className="result__details__boxes">
            <LicenseDetailsBox name="permissions" data={license.permissions} />
            <LicenseDetailsBox name="conditions" data={license.conditions} />
            <LicenseDetailsBox name="limitations" data={license.limitations} />
          </div>
        </div>
      </div>
    ) : (
      ''
    );
  }
}

export default LicenseDetails;
