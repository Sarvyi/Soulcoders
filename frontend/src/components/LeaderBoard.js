import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const LeaderBoard = ({ leaderBoardData, label,color }) => {
    // console.log("data in chart" ,leaderBoardData)
    const options = {
        scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
            datalabels: {
                display: true,
                color: 'black', // Set the color of the data labels
                anchor: 'end', // Set the anchor point of the labels (start, center, end)
                align: 'top', // Set the alignment of the labels (start, center, end, bottom)
                font: {
                  size: 12, // Set the font size of the labels
                },
              },
        },
    };
    const labels = [label];


    let dataset=[]
    for(let obj of leaderBoardData){
        if(obj.score>0){
            dataset.push({
                label:obj.email,
                data:[obj.score],
                backgroundColor: color,
            })
        }
        
    }
    // console.log("dataset is: ",dataset)
    const data = {
        labels,
        datasets: dataset,
    };


    return (
        <>

            <div style={{ width: '50%', padding: '16px' }} className="border-solid border-2 border-sky-500 m-3">
                <h1 className="text-center font-bold text-2xl">For Language:{label}</h1>
                <Bar options={options} data={data} />;
            </div>

        </>
    )
}

export default LeaderBoard