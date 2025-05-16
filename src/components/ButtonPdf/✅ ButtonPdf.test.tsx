import App from "@/App";
import React from "react";
import TestRenderer, { act } from "react-test-renderer";

jest.mock("@/composables/useConvector", () => ({
	useConvector: () => ({
		text: "initial text",
		setText: jest.fn(),
		handleInitConvectorPdf: jest.fn(),
		isConvertPdf: false,
		pdf: "http://example.com/test.pdf",
	}),
}));

describe("App integration", () => {
	it("renders WrapViewerPDF after text input and button click", () => {
		const testRenderer = TestRenderer.create(<App />);
		const root = testRenderer.root;

		const textarea = root.findByProps({ id: "text-array-input" });
		expect(textarea).toBeDefined();

		const button = root.findByProps({ id: "button-pdf" });
		expect(button).toBeDefined();

		act(() => {
			button.props.onClick();
		});

		const viewer = root.findByProps({
			id: "wrap-viewer-pdf",
		});
		expect(viewer).toBeDefined();
		expect(viewer.props.children.props.document.url).toBe(
			"http://example.com/test.pdf",
		);
	});
});
