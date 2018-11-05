import React, { Component } from 'react';
import LicenseDetails from './LicenseDetails';

class LicenseSelection extends Component {
  state = {
    licenses: [],
    selectedLicense: '',
    selectedLicenseDetails: {},
    loading: false,
  };

  fetchData = async (event) => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const API_URL = `https://licenseapi.herokuapp.com/licenses/${
      event ? event.target.value : ''
    }`;
    return await fetch(CORS_PROXY + API_URL);
  };

  componentDidMount = async () => {
    this.setState({
      loading: true,
    });

    const response = await this.fetchData();
    const { licenses } = await response.json();

    this.setState({
      licenses: this.state.licenses.concat(licenses),
      loading: false,
    });
  };

  handleChange = async (event) => {
    this.setState({
      selectedLicense: event.target.value,
      loading: true,
    });

    const response = await this.fetchData(event);
    const selectedLicenseDetails = await response.json();

    this.setState({
      selectedLicenseDetails,
      loading: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <select className="select" onChange={this.handleChange}>
          <option key="select" value="select">
            Select a License
          </option>
          {this.state.licenses.map((license) => (
            <option key={license.id} value={license.id}>
              {license.title}
            </option>
          ))}
        </select>
        {this.state.loading ? (
          <h4 className="loading">Loading...</h4>
        ) : (
          <LicenseDetails license={this.state.selectedLicenseDetails} />
        )}
      </React.Fragment>
    );
  }
}

export default LicenseSelection;
