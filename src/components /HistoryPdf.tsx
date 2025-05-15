import { useHistoryPdf } from "@/composables/useHistoryPdf";
import { historyStorageKey } from "@/const/storageKey";
import type { IHistoryPdfProps } from "@/types/IHistoryPdf";
import React, { type FC, useEffect } from "react";

const HistoryPdf: FC<IHistoryPdfProps> = React.memo(
	({ setText, handleInitConvectorPdf }) => {
		const { history, handleHistoryItem } = useHistoryPdf({
			setText,
			handleInitConvectorPdf,
		});

		return (
			<div className="flex flex-col gap-4">
				<span className="text-center">Історія:</span>
				<ul className="max-w-sm mx-auto space-y-2 flex flex-col gap-4">
					{history.map((item) => (
						<li
							key={item}
							onClick={() => handleHistoryItem(item)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									handleHistoryItem(item);
								}
							}}
							className="w-2xs cursor-pointer bg-gray-100 hover:bg-gray-200 text-black text-center px-4 py-3 rounded-xl shadow transition duration-200 text-ellipsis overflow-hidden text-nowrap"
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		);
	},
);

export default HistoryPdf;
