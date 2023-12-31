import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const option={
    indexAxis:'y',
    elements:{
        bar:{
            borderWidth:1,
        }
    },
    responsive:true,
    plugins:{
        legend: {
            display: false,
        },
      title:{
        display:true,
        text:' Revenue for November 2019',
        position:'bottom'
      }
    }
  }
  
  const data = {
    labels:["Service Plumbing", "Bid Work HVAC", "Service HVAC", "Bid Working Plumbing", "HWT Replacement", "Maintenance","Material Sale"],
    datasets: [
      {
        data: [ 141000, 90000, 59000,58000, 42000,41000,2000],
        backgroundColor: "lightgreen",
      }
  
    ],
  
  };
  
  
  export default function App() {
    return (
      <div className="App">
        <Bar options={option} data={data} />
      </div>
    );
  }