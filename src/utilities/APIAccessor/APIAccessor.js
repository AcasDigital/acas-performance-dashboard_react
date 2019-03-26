import { URL_SUFFIX, BASE_URL } from "../../config";

export default class APIAccessor {
  static async searchItems(searchURL) {
    let endpoint = `${BASE_URL}${searchURL}${URL_SUFFIX}`
    const dataResult = await fetch(endpoint);
    const data = await dataResult.json();
    return data;
  }
}
