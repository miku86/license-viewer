import React, { Component } from 'react';

class LicenseSelection extends Component {
  state = {
    licenses: [],
  };

  componentDidMount = async () => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const API_URL = 'https://licenseapi.herokuapp.com/licenses';
    const response = await fetch(CORS_PROXY + API_URL);
    const { licenses } = await response.json();
    this.setState({
      licenses: this.state.licenses.concat(licenses),
    });
  };

  render() {
    return (
      <select>
        {this.state.licenses.map((license) => {
          return (
            <option key={license.id} value={license.id}>
              {license.title}
            </option>
          );
        })}
      </select>
    );
  }
}

export default LicenseSelection;
