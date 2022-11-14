"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPokemonImg = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _errorFactory = require("../utils/errorFactory.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getPokemonImg = async pokeName => {
  try {
    const pokeData = await _axios.default.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    const pokeImageUrl = pokeData.data.sprites.front_default;
    return pokeImageUrl;
  } catch (err) {
    throw (0, _errorFactory.errorFactory)("error_invalid_pokemon");
  }
};
exports.getPokemonImg = getPokemonImg;