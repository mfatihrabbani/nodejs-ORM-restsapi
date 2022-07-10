export const createError = (code, message) => {
	const error = new Error();
	error.status = code;
	error.message = message;

	return error;
}

export const createResponseSuccessData = (code, data) => {
	const json = {
		code: code,
		status: "Success",
		data: data
	}
	return json;
} 

export const createResponseSuccess = (code) => {
	const json = {
		code: code,
		status: "Success",
	}
	return json;
} 