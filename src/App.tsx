import "./App.css";
import ButtonPdf from "@/components/ButtonPdf";
import HistoryPdf from "@/components/HistoryPdf";
import TextArrayInput from "@/components/TextArrayInput";
import WrapViewerPDF from "@/components/WrapViewerPDF";
import Spinner from "@/components/parts/Spinner";
import { useConvector } from "@/composables/useConvector";
import React from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
	const { text, setText, handleInitConvectorPdf, isConvertPdf, pdf } =
		useConvector();

	return (
		<div>
			<div className="flex">
				<div className="min-w-4xl h-auto min-h-dvh bg-gradient-to-b from-[#020917] to-[#101725] flex flex-col items-center gap-4">
					<TextArrayInput setText={setText} text={text} />
					{isConvertPdf ? (
						<Spinner />
					) : (
						<ButtonPdf handleOnClick={handleInitConvectorPdf} />
					)}

					<div className="m-6 text-white">
						<HistoryPdf
							setText={setText}
							handleInitConvectorPdf={handleInitConvectorPdf}
						/>
					</div>
				</div>

				<WrapViewerPDF pdf={pdf} />
			</div>

			<ToastContainer />
		</div>
	);
};

export default App;
