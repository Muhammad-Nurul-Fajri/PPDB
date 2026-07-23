import React from 'react';
import { createRoot } from 'react-dom/client';
import StatisticsChart from './components/StatisticsChart';
import DeveloperPage from './developer/DeveloperPage';

// Mount StatisticsChart if the container exists
const statsContainer = document.getElementById('react-statistics-chart');
if (statsContainer) {
    const root = createRoot(statsContainer);
    // Parse props from data attributes if needed
    const data = statsContainer.dataset.chartData ? JSON.parse(statsContainer.dataset.chartData) : null;
    root.render(<StatisticsChart data={data} />);
}

// Mount DeveloperPage if the developer container exists
const developerContainer = document.getElementById('react-developer-app');
if (developerContainer) {
    const root = createRoot(developerContainer);
    root.render(<DeveloperPage />);
}

