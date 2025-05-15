import apiClient from "./apiClient";

export async function convertPdf(text: string): Promise<Blob> {
	const response = await apiClient.post(
		"/create-pdf",
		{
			text,
		},
		{
			responseType: "blob",
		},
	);

	return response.data;
}
