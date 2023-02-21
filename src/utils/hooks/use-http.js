import { useState, useCallback } from "react";

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const sendRequest = useCallback(async (request, manageData, errorMessage) => {
		setIsLoading(true);
		setError("");
		try {
			const response = await request();

			if (response.status !== 200) {
				throw new Error(errorMessage);
			}

			const data = await response.data;
			manageData(data);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return {
		isLoading,
		error,
		sendRequest,
	};
};

export default useHttp;
