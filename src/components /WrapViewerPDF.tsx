import type { IWrapViewerPDFProps } from "@/types/IWrapViewerPDF";
import PDFViewer from "pdf-viewer-reactjs";
import React from "react";

const WrapViewerPDF: React.FC = React.memo((props: IWrapViewerPDFProps) => {
	if (!props.pdf) return null;

	return (
		<PDFViewer
			document={{
				base64: props.pdf,
			}}
		/>
	);
});

export default WrapViewerPDF;
