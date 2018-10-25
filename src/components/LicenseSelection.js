import React, { Component } from 'react';
import LicenseDetails from './LicenseDetails';

class LicenseSelection extends Component {
  state = {
    licenses: [],
    selectedLicense: '',
    selectedLicenseDetails: {},
  };

  fetchData = async (event) => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const API_URL = `https://licenseapi.herokuapp.com/licenses/${
      event ? event.target.value : ''
    }`;
    return await fetch(CORS_PROXY + API_URL);
  };

  componentDidMount = async () => {
    const response = await this.fetchData();
    const { licenses } = await response.json();
    this.setState({
      licenses: this.state.licenses.concat(licenses),
    });
  };

  handleChange = async (event) => {
    this.setState({
      selectedLicense: event.target.value,
    });
    const response = await this.fetchData(event);
    const selectedLicenseDetails = await response.json();
    this.setState({
      selectedLicenseDetails,
    });
  };

  render() {
    return (
      <React.Fragment>
        <select className="select" onChange={this.handleChange}>
          {this.state.licenses.map((license) => {
            return (
              <option key={license.id} value={license.id}>
                {license.title}
              </option>
            );
          })}
        </select>
        <LicenseDetails license={this.state.selectedLicenseDetails} />
      </React.Fragment>
    );
  }
}

export default LicenseSelection;
