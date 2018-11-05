import React, { Component } from 'react';
import LicenseDetailsBox from './LicenseDetailsBox';

class LicenseDetails extends Component {
  removeLinks = (text) => text.replace(/(<a href=".+?">|<\/a>)/g, '');

  handleCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(this.props.license.text)
        .then(() => console.log("Full Text is now in Clipboard"))
        .catch((err) => console.error('Could not copy text: ', err));
    }
  };

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
          <div className="result__fulltext">
            <h4>Full Text:</h4>
            <button onClick={this.handleCopyClick}>COPY TEXT</button>
            <p>{license.text}</p>
          </div>
        </div>
      </div>
    ) : (
      ''
    );
  }
}

export default LicenseDetails;
