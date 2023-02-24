import { useState, useCallback } from "react";

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({});

	const sendRequest = useCallback(async (request, manageData, errorMessage) => {
		setIsLoading(true);
		setError({});
		try {
			const response = await request;

			const data = await response.data;
			manageData(data);
		} catch (error) {
			setError({ message: errorMessage, status: error.response.status });
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
