import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const option = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 1,
        }
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: ' Revenue for November 2019',
            position: 'bottom'
        }
    }
}

const data = {
    labels: ["Everett", "Seatle", "Lynnwood", "Bothell", "Mukiletto", "Edmonds"],
    datasets: [
        {
            data: [60000, 50000, 39000, 37000, 35500, 29000],
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