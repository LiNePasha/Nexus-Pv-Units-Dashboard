import React from 'react';

function Overview({ pvUnits }) {
  // Calculate summary information
  const totalUnits = pvUnits.length;
  const totalPowerOutput = pvUnits.reduce((total, unit) => total + unit.power_output, 0);
  const onlineUnits = pvUnits.filter(unit => unit.status === 'Online').length;
  const offlineUnits = totalUnits - onlineUnits;

  return (
    <div className="overview">
      <div className="summary row justify-content-center">
        <div className='col-lg-2'>
            <span>Total PV Units: </span> 
            <br />
            <span className='number'>{totalUnits}</span>
        </div>
        <div className='col-lg-2'>
            <span>Total Power Output: <small>kW</small></span> 
            <br />
            <span className='number'>{totalPowerOutput} </span>
        </div>
        <div className='col-lg-2'>
            <span>Online Units: </span> 
            <br />
            <span className='number'>{onlineUnits}</span>
        </div>
        <div className='col-lg-2'>
            <span>Offline Units: </span> 
            <br />
            <span className='number'>{offlineUnits}</span>
        </div>
      </div>
      {/* Add data visualization here if needed */}
    </div>
  );
}

export default Overview;