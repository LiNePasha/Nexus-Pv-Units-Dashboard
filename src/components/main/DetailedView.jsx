import React, { useState } from 'react';

function DetailedView({ pvUnits }) {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRefreshData = (unitId) => {
    console.log(`Refreshing data for PV unit with ID ${unitId}`);
  };

  const handleViewMoreInfo = (unitId) => {
    setSelectedUnit(unitId);
  };

// Filter PV units based on search term (ignoring spaces)
const filteredUnits = pvUnits.filter(unit =>
  unit.name.toLowerCase().replace(/\s+/g, '').includes(searchTerm.toLowerCase().replace(/\s+/g, '')) ||
  unit.location.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="detailed-view">

      {/* Search bar */}
      <div class="search-input-container">
          <input type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} class="search-input" 
          />
          <div class="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m5 6l-5-5M10 14a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
          </div>
      </div>

      {/* PV unit list */}
      <div className="pv-unit-list row">
        {filteredUnits.map(unit => (
          <div key={unit.id} className='col-lg-4 pv-unit'>
            <h3>{unit.name}</h3>
            <p>Location: {unit.location}</p>
            <p>Status: {unit.status}</p>
            <p>Power Output: {unit.power_output} kW</p>
            <p>Last Update Time: {unit.last_update_time}</p>
            <div className="action-buttons d-flex justify-content-between">
              <button className='active' onClick={() => handleRefreshData(unit.id)}>Refresh Data</button>
              <button className='active' onClick={() => handleViewMoreInfo(unit.id)}>View More Info</button>
            </div>
          </div>
        ))}
        {filteredUnits.length === 0 ? <p className='text-center pv-unit'>Search Output is Null :)</p> : <></>}
      </div>

      {/* Modal or expandable section for viewing more info */}
      {selectedUnit && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedUnit(null)}>&times;</span>
            <h2>More Info for PV Unit {selectedUnit}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailedView;