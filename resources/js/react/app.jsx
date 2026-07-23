import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load large component trees to split bundle chunks
const StatisticsChart = lazy(() => import('./components/StatisticsChart'));
const DeveloperApp = lazy(() => import('./developer/DeveloperApp'));

// Fallback loader component for Developer page
function DeveloperPageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white font-sans">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin animation-delay-200"></div>
      </div>
      <p className="text-xs tracking-widest text-slate-400 font-mono uppercase animate-pulse">
        Loading Developer Experience...
      </p>
    </div>
  );
}

// Mount StatisticsChart if container exists
const statsContainer = document.getElementById('react-statistics-chart');
if (statsContainer) {
    const root = createRoot(statsContainer);
    const data = statsContainer.dataset.chartData ? JSON.parse(statsContainer.dataset.chartData) : null;
    root.render(
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-slate-400 text-sm font-mono">Loading chart...</div>}>
            <StatisticsChart data={data} />
        </Suspense>
    );
}

// Mount DeveloperApp if container exists
const devContainer = document.getElementById('react-developer-page');
if (devContainer) {
    const root = createRoot(devContainer);
    root.render(
        <Suspense fallback={<DeveloperPageSkeleton />}>
            <DeveloperApp />
        </Suspense>
    );
}
