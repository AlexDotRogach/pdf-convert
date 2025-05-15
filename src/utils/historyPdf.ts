import { historyStorageKey } from "@/const/storageKey";

export const isExistTextInHistoryPdf = (value: string) => {
	const historyStorageData = localStorage.getItem(historyStorageKey);

	if (!historyStorageData) return;

	return !!JSON.parse(historyStorageData)?.find((item) => item === value);
};
