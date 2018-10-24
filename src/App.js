import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LicenseSelection from './components/LicenseSelection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <LicenseSelection />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
