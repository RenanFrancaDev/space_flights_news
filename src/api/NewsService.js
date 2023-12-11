import axios from "axios";

const url = "https://api.spaceflightnewsapi.net/v4/articles/?limit=2";

export class NewsService {
  static getNews() {
    return axios(url);
  }

  static getNewsDetails(id) {
    return axios(url + `/${id}`);
  }

  static searchNews(search) {
    return axios(url + `/?search=${search}`);
  }
}
