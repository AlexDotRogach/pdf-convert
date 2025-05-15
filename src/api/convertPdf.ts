import apiClient from "./apiClient";

export async function convertPdf(text: string): Promise<string> {
	const response = await apiClient.post<string>("/create-pdf", {
		text,
	});

	return response.data;
}
