import React from 'react';

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
      <button className={activeTab === 'detailedView' ? 'active' : ''} onClick={() => setActiveTab('detailedView')}>Detailed View</button>
    </div>
  );
}

export default Tabs;