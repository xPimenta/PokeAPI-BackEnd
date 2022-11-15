import { errorFactory } from "../utils/errorFactory";

export const validateQueryStr = async (SearchQuery: any) => {
	  let { pokemon, limit, page } = SearchQuery;

	  console.log(pokemon, limit, page);

  if (limit == "" || limit == undefined  || limit < 1 || limit == null || limit == "undefined") {
	limit = "10";
  } else if(isNaN(parseInt(limit))) { throw errorFactory("error_invalid_limit"); }

  if (page == "" || page == undefined || page < 1 || page == null || page == "undefined") {
	page = "1";
  }	else if(isNaN(parseInt(page))) { throw errorFactory("error_invalid_page"); }

  if(pokemon == "" || pokemon == undefined) {
	pokemon = "all"
  }

  return { pokemon, limit: parseInt(limit), page: parseInt(page) };
}