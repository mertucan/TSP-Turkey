import React from 'react'
import HeaderContent from './Components/HeaderContent'
import MapContainer from './Components/MapContainer';
import AppContainer from './Components/AppContainer';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <HeaderContent />
      <MapContainer />
      <AppContainer />
      <Footer />
    </>
  );
};

export default App;