import type { IButtonPdfProps } from "@/types/IButtonPdf";
import React from "react";

const ButtonPdf = React.memo((props: IButtonPdfProps) => {
	return (
		<button
			onClick={() => props.handleOnClick()}
			className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-md transition w-xs cursor-pointer"
			type="button"
		>
			Конвертувати в PDF
		</button>
	);
});

export default ButtonPdf;
