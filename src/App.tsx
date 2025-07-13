// App.tsx
import type React from "react";
import { useBusinessCardData } from "./hooks/useBusinessCardData";
import "./index.css";
import BusinessCard from "./BusinessCard";

const App: React.FC = () => {
	const { data, loading, error } = useBusinessCardData();

	if (loading) {
		return (
			<div className="font-inter bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen flex items-center justify-center p-4 dark:from-slate-900 dark:to-slate-800">
				<div className="text-slate-600 dark:text-slate-300">読み込み中...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="font-inter bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen flex items-center justify-center p-4 dark:from-slate-900 dark:to-slate-800">
				<div className="text-red-600 dark:text-red-400">エラー: {error}</div>
			</div>
		);
	}

	if (!data) {
		return (
			<div className="font-inter bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen flex items-center justify-center p-4 dark:from-slate-900 dark:to-slate-800">
				<div className="text-slate-600 dark:text-slate-300">
					データが見つかりません
				</div>
			</div>
		);
	}

	return (
		<div className="font-inter bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen flex items-center justify-center p-4 transition-colors duration-300 dark:from-slate-900 dark:to-slate-800">
			<div className="container w-full max-w-md flex items-center justify-center">
				<BusinessCard data={data} />
			</div>
		</div>
	);
};

export default App;
