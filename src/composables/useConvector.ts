import { convertPdf } from "@/api/convertPdf";
import {
	errorConvertPdf,
	successConvertPdf,
	warningConvertPdf,
} from "@/const/messages";
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

	const handleInitConvectorPdf = useCallback(() => {
		if (!textRef.current) {
			toast.warning(warningConvertPdf);
			return;
		}

		setIsConvertPdf(true);

		convertPdf(textRef.current)
			.then((pdf) => {
				setPdf(pdf);
				toast.success(successConvertPdf);
				// setText("");
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
