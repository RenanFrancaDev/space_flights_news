import axios from "axios";

const url = "https://api.spaceflightnewsapi.net/v4/articles/21783/";

export class NewsService {
  static getNews() {
    return axios(url);
  }
}
