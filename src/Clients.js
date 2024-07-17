import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Clients.css';

const ClientsWithDonations = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:5128/api/donations/clientsWithDonations');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients with donations', error);
      }
    };

    fetchClients();
  }, []);

  const handleGoToDonations = () => {
    navigate('/donations');
  };

  return (
    <div className="clients-container">
      <h2>Estado de Donaciones de Clientes</h2>
      {clients.map((client) => {
        const progress = (client.donationStatus / client.donationGoal) * 100;
        return (
          <div key={client.id} className="client">
            <label>{client.name} {client.lastName}</label>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
              <div className="progress-info">
                <span>{client.donationStatus.toFixed(2)}</span>
                <span>{client.donationGoal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        );
      })}
      <button className="scroll-button" onClick={handleGoToDonations}>Ir a Donaciones</button>
    </div>
  );
};

export default ClientsWithDonations;
