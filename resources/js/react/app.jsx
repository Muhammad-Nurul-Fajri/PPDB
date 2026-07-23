import React from 'react';
import { createRoot } from 'react-dom/client';
import StatisticsChart from './components/StatisticsChart';
import DeveloperApp from './developer/DeveloperApp';

// Mount StatisticsChart if the container exists
const statsContainer = document.getElementById('react-statistics-chart');
if (statsContainer) {
    const root = createRoot(statsContainer);
    const data = statsContainer.dataset.chartData ? JSON.parse(statsContainer.dataset.chartData) : null;
    root.render(<StatisticsChart data={data} />);
}

// Mount DeveloperApp if the container exists
const devContainer = document.getElementById('react-developer-page');
if (devContainer) {
    const root = createRoot(devContainer);
    root.render(<DeveloperApp />);
}

