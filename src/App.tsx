import "./App.css";
import ButtonPdf from "@/components /ButtonPdf";
import TextArrayInput from "@/components /TextArrayInput";
import WrapViewerPDF from "@/components /WrapViewerPDF";
import Spinner from "@/components /parts/Spinner";
import { useConvector } from "@/composables/useConvector";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
	const { text, setText, handleInitConvectorPdf, isConvertPdf, pdf } =
		useConvector();

	return (
		<>
			<div className="flex">
				<div className="min-w-4xl h-dvh bg-gradient-to-b from-[#020917] to-[#101725] flex flex-col justify-center items-center gap-4">
					<TextArrayInput setText={setText} text={text} />
					{isConvertPdf ? (
						<Spinner />
					) : (
						<ButtonPdf onClick={handleInitConvectorPdf} />
					)}
				</div>
				<WrapViewerPDF pdf={pdf} />
			</div>

			<ToastContainer />
		</>
	);
};

export default App;
