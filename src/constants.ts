// export const BASE_API_URL = "http://localhost:3000";
export const BASE_API_URL =
	process.env.REACT_APP_ENV === "development"
		? "http://localhost:3000"
		: "https://scrapergpt-backend-b088310f8268.herokuapp.com";
