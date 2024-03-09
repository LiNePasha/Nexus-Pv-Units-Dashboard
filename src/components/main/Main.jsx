import React from 'react';
import pvUnitsData from '../../data/pvUnitsData'; // Import the dataset
import Overview from './Overview';
import DetailedView from './DetailedView';
import Tabs from './Tabs';
import './main.css';

function Main() {
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <main id='main' className='main'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'overview' ? <Overview pvUnits={pvUnitsData} /> : <DetailedView pvUnits={pvUnitsData} />}
    </main>
  );
}

export default Main;