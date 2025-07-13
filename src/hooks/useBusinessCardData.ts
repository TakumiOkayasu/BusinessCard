import { useEffect, useState } from "react";
import type { BusinessCardData } from "../types";

interface UseBusinessCardDataReturn {
	data: BusinessCardData | null;
	loading: boolean;
	error: string | null;
}

export const useBusinessCardData = (): UseBusinessCardDataReturn => {
	const [data, setData] = useState<BusinessCardData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true);

				// publicディレクトリからfetchで取得
				const response = await fetch("/data/info.json");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const jsonData = await response.json();

				// 配列の場合は最初の要素を取得
				if (Array.isArray(jsonData) && jsonData.length > 0) {
					setData(jsonData[0]);
				} else if (!Array.isArray(jsonData)) {
					// オブジェクトの場合はそのまま使用
					setData(jsonData);
				} else {
					throw new Error("データが見つかりません");
				}
			} catch (err) {
				console.error("Error loading data:", err);
				setError(
					err instanceof Error ? err.message : "データの読み込みに失敗しました",
				);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, []);

	return { data, loading, error };
};
