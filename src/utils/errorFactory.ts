export const errorFactory = (errorType: ErrorType, errorJoi = "") => {
	if (errorJoi !== "") return { message: errorJoi, statusCode: 400 };
	return errorMessages[errorType];
  };
  
  const errorMessages = {
	error_invalid_limit: {
	  message: "Limit must be a number greater than 0",
	  statusCode: 400,
	},
	error_invalid_page: {
		message: "Page must be a number greater than 0",
		statusCode: 400,
	},
	error_invalid_pokemon: {
		message: "Pokemon must exist and be a string",
		statusCode: 400,
	},
	error_invalid_query_search: {
		message: "Invalid query",
		statusCode: 400,
	},
	error_invalid_query_all: {
		message: "Invalid query for all",
		statusCode: 400,
	},
	error_post_comment: {
		message: "Error posting comment",
		statusCode: 500,
	},
	error_invalid_body: {
		message: "Invalid body",
		statusCode: 400,
	},


  };
  
  type ErrorType = keyof typeof errorMessages;