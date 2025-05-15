import { historyStorageKey } from "@/const/storageKey";
import type { IUseHistoryPdfProps } from "@/types/IUseHistoryPdf";
import React, { useCallback, useEffect, useState } from "react";

export const useHistoryPdf = ({
	setText,
	handleInitConvectorPdf,
}: IUseHistoryPdfProps) => {
	const [history, setHistory] = useState<string[]>([]);

	const handleHistoryItem = async (item: string) => {
		if (!setText || !handleInitConvectorPdf) return;

		await setText(item);

		setTimeout(() => {
			handleInitConvectorPdf();
		});
	};

	const initStorageHistory = useCallback((value?: string | undefined) => {
		const historyStorageData = localStorage.getItem(historyStorageKey);
		const newHistoryStorageData: string[] = [];

		if (!value && historyStorageData) {
			setHistory(JSON.parse(historyStorageData));
			return;
		}

		if (historyStorageData && value) {
			const concatValues: string[] = [value, ...JSON.parse(historyStorageData)];

			newHistoryStorageData.push(...concatValues);

			if (newHistoryStorageData.length > 5) newHistoryStorageData.pop();

			localStorage.setItem(
				historyStorageKey,
				JSON.stringify(newHistoryStorageData),
			);
		} else if (value) {
			newHistoryStorageData.push(value);

			localStorage.setItem(
				historyStorageKey,
				JSON.stringify(newHistoryStorageData),
			);
		}

		setHistory(newHistoryStorageData);
	}, []);

	const listenerStorageHistory = useCallback(
		(e: unknown) => {
			const { value } = (e as CustomEvent).detail;

			if (value) initStorageHistory(value);
		},
		[initStorageHistory],
	);

	useEffect(() => {
		window.addEventListener(historyStorageKey, listenerStorageHistory);
		initStorageHistory();

		return () => {
			window.removeEventListener(historyStorageKey, listenerStorageHistory);
		};
	}, [initStorageHistory, listenerStorageHistory]);

	return {
		history,
		handleHistoryItem,
	};
};
