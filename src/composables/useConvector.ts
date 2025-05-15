import { convertPdf } from "@/api/convertPdf";
import { useHistoryPdf } from "@/composables/useHistoryPdf";
import {
	errorConvertPdf,
	successConvertPdf,
	warningConvertPdf,
} from "@/const/messages";
import { historyStorageKey } from "@/const/storageKey";
import { isExistTextInHistoryPdf } from "@/utils/historyPdf";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const useConvector = () => {
	const [text, setText] = useState("");
	const [isConvertPdf, setIsConvertPdf] = useState(false);
	const [pdf, setPdf] = useState("");

	const textRef = useRef(text);

	useEffect(() => {
		textRef.current = text;
	}, [text]);

	const handleInitConvectorPdf = useCallback(async (e) => {
		if (!textRef.current) {
			toast.warning(warningConvertPdf);
			return;
		}

		setIsConvertPdf(true);

		convertPdf(textRef.current)
			.then((pdfBlob) => {
				if (!isExistTextInHistoryPdf(textRef.current)) {
					window.dispatchEvent(
						new CustomEvent(historyStorageKey, {
							detail: { key: historyStorageKey, value: textRef.current },
						}),
					);
				}

				const pdfUrl = URL.createObjectURL(pdfBlob);

				setPdf(pdfUrl);

				toast.success(successConvertPdf);
			})
			.catch((err) => {
				toast.error(errorConvertPdf);
				console.error(err);
			})
			.finally(() => {
				setIsConvertPdf(false);
			});
	}, []);

	return {
		text,
		setText,
		handleInitConvectorPdf,
		isConvertPdf,
		pdf,
	};
};
