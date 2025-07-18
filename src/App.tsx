// App.tsx
import type React from 'react';
import { useBusinessCardData } from './hooks/useBusinessCardData';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusinessCard from './BusinessCard';

const Page: React.FC = () => {
  const { data, loading, error } = useBusinessCardData();

  if (loading) {
    return (
      <div className="font-inter bg-white min-h-screen flex items-center justify-center p-4 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
        <div className="text-slate-600 dark:text-slate-300">読み込み中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-inter bg-white min-h-screen flex items-center justify-center p-4 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
        <div className="text-red-600 dark:text-red-400">エラー: {error}</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="font-inter bg-white min-h-screen flex items-center justify-center p-4 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
        <div className="text-slate-600 dark:text-slate-300">
          データが見つかりません
        </div>
      </div>
    );
  }

  return (
    <div className="font-inter w-full bg-white min-h-screen flex items-center justify-center p-4 transition-colors duration-300 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
      <div className="container w-full max-w-md flex items-center justify-center">
        <BusinessCard data={data} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/business_card" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
