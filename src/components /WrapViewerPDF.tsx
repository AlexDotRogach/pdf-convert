import type { IWrapViewerPDFProps } from "@/types/IWrapViewerPDF";
import React from "react";
import PDFViewer from 'pdf-viewer-reactjs';

const WrapViewerPDF: React.FC = React.memo((props: IWrapViewerPDFProps) => {
	if (!props.pdf) return null

	return (
		<PDFViewer
			document={{
				base64: props.pdf,
			}}
		/>
	);
});

export default WrapViewerPDF;
