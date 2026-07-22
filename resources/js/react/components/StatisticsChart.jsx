import React from 'react';
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

export default function StatisticsChart({ data }) {
    if (!data) {
        return <div className="p-4 text-center text-gray-500">No data available for chart.</div>;
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            },
        },
    };

    const chartData = {
        labels: data.labels || ['Gelombang 1', 'Gelombang 2'],
        datasets: [
            {
                label: 'Jumlah Pendaftar',
                data: data.values || [0, 0],
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgb(59, 130, 246)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-xl p-4">
            <Bar options={options} data={chartData} />
        </div>
    );
}
