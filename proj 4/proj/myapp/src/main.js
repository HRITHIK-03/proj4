import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Data from "./BarChart";
import Data2 from "./BarChart2";
import './style2.css';
function main() {
  return (
    <>
      <div className='cm'>
        <p>Company Metrics</p>
      </div>
      <div className='cm1'>
        <div className='cm2'>
          <p id='pmain1'>$406,411.29</p>
          <p>Total Revenue</p>
        </div>
        <div className='cm2'>
          <p>$620</p>
          <p>Total Jobs Avg</p>
        </div>
        <div className='cm2'>
          <p>655</p>
          <p>Tickets Created</p>
        </div>
        <div className='cm2'>
          <p>735</p>
          <p>Tickets Scheduled</p>
        </div>
      </div>
      <div className='cm1'>
        <div className='cm2'>
          <p id='pmain2'>$110,228.8</p>
          <p>Outstanding Amount</p>
        </div>
        <div className='cm2'>
          <p>105</p>
          <p>Memberships Sold</p>
        </div>
        <div className='cm2'>
          <p>436</p>
          <p>Jobs Completed</p>
        </div>
        <div className='cm2'>
          <p>65</p>
          <p>Total Canceled</p>
        </div>
      </div>
      <div className='rev'>
        <p id='p1'>Revenue By Job Location</p>
        <p id='p2'>Revenue By Job Type</p>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: 'whitesmoke', width: 600, margin: '0px 55px 0px 30px', padding: 30, legend: false ,height:275}}>
          <Data />
        </div>
        <div style={{ backgroundColor: 'whitesmoke', width: 600, margin: '0px 30px 0px 90px', padding: 30, legend: false ,height:275}}>
          <Data2 />
        </div>
      </div>
    </>
  );
}

export default main;
