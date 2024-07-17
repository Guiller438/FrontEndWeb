import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DonationsForm from './DonationsForm';
import Clients from './Clients';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/donations" element={<DonationsForm />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/" element={<Clients />} /> {/* Ruta para el panel de administración */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
