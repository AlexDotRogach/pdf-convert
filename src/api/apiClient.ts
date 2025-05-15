import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://95.217.134.12:4010",
	timeout: 5000,
	params: {
		apiKey: "78684310-850d-427a-8432-4a6487f6dbc4",
	},
});

export default apiClient;
