import { useState } from "react";

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = async (request, manageData, errorMessage) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await request();

			if (!response.ok) {
				throw new Error(errorMessage);
			}

			const data = await response.data;
			manageData(data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		error,
		sendRequest,
	};
};

export default useHttp;
