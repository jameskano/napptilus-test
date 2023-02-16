export const REACT_APP_API_URL = "REACT_APP_API_URL";

export const getEnvVariable = (env_variable) => {
    const envValue = process.env[env_variable];
    if (envValue !== undefined) {
        return envValue;
    }
    else {
        return "";
    }
};