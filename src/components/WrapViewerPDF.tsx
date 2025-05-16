import type { IWrapViewerPDFProps } from "@/types/IWrapViewerPDF";
import PDFViewer from "pdf-viewer-reactjs";
import React from "react";

const WrapViewerPDF = React.memo((props: IWrapViewerPDFProps) => {
	if (!props.pdf) return null;

	return (
		<div id="wrap-viewer-pdf" className="p-6">
			<PDFViewer
				key={props.pdf}
				document={{
					url: props.pdf,
				}}
				hideNavbar={true}
			/>
		</div>
	);
});

export default WrapViewerPDF;
